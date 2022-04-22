import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, SetMetadata, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationInput } from './dto/create-application.input';
import { UpdateApplicationInput } from './dto/update-application.input';
import { Roles, User, UserModel } from '@gamify/auth';
import { Role } from '@gamify/core';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Post()
  async create(@Body() createApplicationInput: CreateApplicationInput) {
    console.log(JSON.stringify(createApplicationInput));

    if (! await this.applicationsService.isNameUnique(createApplicationInput.name)) {
      throw new BadRequestException("Name must be unique");
    }

    // TODO Validate current user id, should be obtained from current authenticated user.
    createApplicationInput.ownerUserId = 1;

    return await this.applicationsService.create(createApplicationInput);
  }

  @Get()
  findAll(@User() user: UserModel) {
    console.log('request user:');
    console.log(user);
    return this.applicationsService.findMany();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.MODERATOR)
  async findOne(@Param('id', ParseIntPipe) id: number, @User() user: UserModel) {
    if (! await this.applicationsService.canModerateApplication(id, user.id)) {
      throw new UnauthorizedException('Can not moderate app');
    }

    return this.findApplicationOrFail(id);
  }

  @Put(':id')
  // Admin      - always
  // Moderator  - if you own the application, or are added as moderator (future feature)
  @Roles(Role.ADMIN, Role.MODERATOR)
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateApplicationInput: UpdateApplicationInput, @User() user: UserModel) {
    if (! await this.applicationsService.canModerateApplication(id, user.id)) {
      throw new UnauthorizedException();
    }

    await this.findApplicationOrFail(id);

    if (! await this.applicationsService.isNameUnique(updateApplicationInput.name)) {
      throw new BadRequestException("Name must be unique");
    }

    return await this.applicationsService.update(id, updateApplicationInput);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.findApplicationOrFail(id);

    return await this.applicationsService.remove(id);
  }

  /**
   * Tries to find a application in the database by id. When the applications doesn't exist it throws a NotFoundException
   * 
   * @param id The id of the applications.
   * @returns A application when found in the database.
   */
  private async findApplicationOrFail(id: number) {
    const app = await this.applicationsService.findOne(id);

    if (app === null) {
      throw new NotFoundException();
    }

    return app;
  }
}
