import { Roles, User, UserModel } from '@gamify/auth';
import { Role, UserBadge } from '@gamify/shared';
import { ApplicationsService, BadgesService, UsersService } from '@gamify/data';
import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UnauthorizedException } from '@nestjs/common';
import { AssignBadgeDto } from './dto/give-badge.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly applicationsService: ApplicationsService,
    private readonly badgesService: BadgesService,
  ) {}

  @ApiCreatedResponse({ type: UserBadge, description: 'The created user badge' })
  @Post('/:id/badges')
  @Roles(Role.ADMIN, Role.MODERATOR)
  async assignBadge(@Param('id', ParseIntPipe) id: number, @Body() assignBadgeDto: AssignBadgeDto, @User() authUser: UserModel): Promise<UserBadge> {
    const badge = await this.badgesService.findOne(assignBadgeDto.badgeId);

    if (! badge) {
      throw new BadRequestException('Badge not found');
    }

    if (! await this.applicationsService.canModerateApplication(badge.applicationId, authUser.id)) {
      throw new UnauthorizedException();
    }

    // Check if the user joined the application, this will indirectly check if the user exists.
    if (! await this.applicationsService.findApplicationUser(badge.applicationId, id)) {
      throw new BadRequestException("User doesn't belong to this application");
    }

    if (! badge.repeatedlyObtainable) {
      // The badge is not repeatedly obtainable, so we check if the user already has it.
      const userBadges = await this.usersService.findUserBadges(id);
      if (userBadges.some(userBadge => userBadge.badgeId === badge.id)) {
        throw new BadRequestException("User already has this badge");
      }
    }
    
    return await this.usersService.assignBadgeToUser(id, badge.id);
  }

  @ApiOkResponse({ type: UserBadge, description: 'The deleted user badge' })
  @Delete('/badges/:userBadgeId')
  @Roles(Role.ADMIN, Role.MODERATOR)
  async removeBadge(@Param('userBadgeId', ParseIntPipe) id: number, @User() authUser: UserModel): Promise<UserBadge> {
    const userBadge = await this.usersService.findUserBadge(id);

    if (!userBadge) {
      throw new BadRequestException('User badge not found');
    }

    const badge = await this.badgesService.findOne(userBadge.badgeId);

    if (! await this.applicationsService.canModerateApplication(badge.applicationId, authUser.id)) {
      throw new UnauthorizedException();
    }

    return this.usersService.removeUserBadge(id);
  }

  @ApiOkResponse({ type: UserBadge, description: 'Get all user badges' })
  @ApiQuery({ name: 'applicationId', required: false })
  @Get('/:id/badges')
  async getUserBadges(
    @Param('id', ParseIntPipe) id: number, 
    @Query('applicationId') applicationId?: number
  ): Promise<UserBadge[]> {
    return this.usersService.findUserBadges(id, applicationId);
  }
}
