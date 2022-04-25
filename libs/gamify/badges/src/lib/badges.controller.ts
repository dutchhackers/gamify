import { ApplicationsService } from '@gamify/application';
import { Roles, User, UserModel } from '@gamify/auth';
import { Role } from '@gamify/core';
import { BadRequestException, Body, Controller, Delete, forwardRef, Get, Inject, NotFoundException, Param, ParseIntPipe, Post, Put, UnauthorizedException } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { CreateBadgeInput } from './dto/create-badge.input';
import { UpdateBadgeInput } from './dto/update-badge.input';
import { BadgeModel } from './models';

@Controller('badges')
export class BadgesController {
  constructor(
    private badgesService: BadgesService, 
    private applicationsService: ApplicationsService
  ) {}

  @Post()
  @Roles(Role.ADMIN, Role.MODERATOR)
  async create(@Body() createBadgeInput: CreateBadgeInput, @User() user: UserModel): Promise<BadgeModel> {
    const application = await this.applicationsService.findOne(createBadgeInput.applicationId);
    if (application === null) {
      throw new BadRequestException('Application not found');
    }

    if (! await this.applicationsService.canModerateApplication(application.id, user.id)) {
      throw new UnauthorizedException();
    }

    return this.badgesService.create(createBadgeInput);
  }

  @Get()
  findAll(): Promise<BadgeModel[]> {
    return this.badgesService.findMany();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<BadgeModel> {
    return this.findBadgeOrFail(id);
  }

  @Put(':id')
  @Roles(Role.ADMIN, Role.MODERATOR)
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateBadgeInput: UpdateBadgeInput, @User() user: UserModel): Promise<BadgeModel> {
    const badge = await this.findBadgeOrFail(id);

    if (! await this.applicationsService.canModerateApplication(badge.applicationId, user.id)) {
      throw new UnauthorizedException();
    }

    return this.badgesService.update(id, updateBadgeInput);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.MODERATOR)
  async remove(@Param('id', ParseIntPipe) id: number, @User() user: UserModel): Promise<BadgeModel> {
    const badge = await this.findBadgeOrFail(id);

    if (! await this.applicationsService.canModerateApplication(badge.applicationId, user.id)) {
      throw new UnauthorizedException();
    }

    return this.badgesService.remove(id);
  }

  /**
   * Tries to find a badge in the database by id. When the badge doesn't exist it throws a NotFoundException
   * 
   * @param id The id of the badge.
   * @returns A badge when found in the database.
   */
  private async findBadgeOrFail(id: number) {
    const badge = await this.badgesService.findOne(id);

    if (badge === null) {
      throw new NotFoundException();
    }

    return badge;
  }
}
