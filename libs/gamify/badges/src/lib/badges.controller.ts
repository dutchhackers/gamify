import { Roles, User, UserModel } from '@gamify/auth';
import { Role } from '@gamify/core';
import { ApplicationsService, BadgesService } from '@gamify/data';
import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UnauthorizedException } from '@nestjs/common';
import { CreateBadgeInput } from './dto/create-badge.input';
import { UpdateBadgeInput } from './dto/update-badge.input';
import { Badge } from '@gamify/shared';

@Controller('badges')
export class BadgesController {
  constructor(
    private badgesService: BadgesService, 
    private applicationsService: ApplicationsService,
  ) {}

  @Post()
  @Roles(Role.ADMIN, Role.MODERATOR)
  async create(@Body() createBadgeInput: CreateBadgeInput, @User() user: UserModel): Promise<Badge> {
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
  findAll(@Query('applicationId') applicationId?: number): Promise<Badge[]> {
    return this.badgesService.findMany(applicationId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Badge> {
    return this.findBadgeOrFail(id);
  }

  @Put(':id')
  @Roles(Role.ADMIN, Role.MODERATOR)
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateBadgeInput: UpdateBadgeInput, @User() user: UserModel): Promise<Badge> {
    const badge = await this.findBadgeOrFail(id);

    if (! await this.applicationsService.canModerateApplication(badge.applicationId, user.id)) {
      throw new UnauthorizedException();
    }

    return this.badgesService.update(id, updateBadgeInput);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.MODERATOR)
  async remove(@Param('id', ParseIntPipe) id: number, @User() user: UserModel): Promise<Badge> {
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
