import { Roles, User, UserModel } from '@gamify/auth';
import { Role } from '@gamify/core';
import { ApplicationsService, BadgesService, UsersService } from '@gamify/data';
import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post, UnauthorizedException } from '@nestjs/common';
import { GiveBadgeDto } from './dto/give-badge.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly applicationsService: ApplicationsService,
    private readonly badgesService: BadgesService,
  ) {}

  
  @Post('/:id/badges')
  @Roles(Role.ADMIN, Role.MODERATOR)
  async giveBadge(@Param('id', ParseIntPipe) id: number, @Body() giveBadgeDto: GiveBadgeDto, @User() authUser: UserModel) {
    const badge = await this.badgesService.findOne(giveBadgeDto.badgeId);

    if (! await this.applicationsService.canModerateApplication(badge.applicationId, authUser.id)) {
      throw new UnauthorizedException();
    }

    // Check if the user joined the application, this will indirectly check if the user exists.
    if (! await this.applicationsService.findApplicationUser(badge.applicationId, id)) {
      throw new BadRequestException("User doesn't belong to this application");
    }

    if (! badge.repeatedlyObtainable) {
      // The badge is not repeatedly obtainable, so we check if the user already has it.
      const userBadges = await this.usersService.getUserBadges(id);
      if (userBadges.some(userBadge => userBadge.badgeId === badge.id)) {
        throw new BadRequestException("User already has this badge");
      }
    }
    
    return await this.usersService.assignBadgeToUser(id, badge.id);
  }

  @Get('/:id/badges')
  async getUserBadges(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserBadges(id);
  }
}
