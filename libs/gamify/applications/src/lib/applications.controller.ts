import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, UnauthorizedException } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationInput } from './dto/create-application.input';
import { UpdateApplicationInput } from './dto/update-application.input';
import { IApplication } from '@gamify/shared';
import { Roles, User, UserModel } from '@gamify/auth';
import { Role } from '@gamify/core';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Post()
  @Roles(Role.ADMIN, Role.MODERATOR)
  async create(@Body() createApplicationInput: CreateApplicationInput, @User() user: UserModel) {
    if (! await this.applicationsService.isNameUnique(createApplicationInput.name)) {
      throw new BadRequestException("Name must be unique");
    }

    createApplicationInput.ownerUserId = user.id;

    return await this.applicationsService.create(createApplicationInput);
  }

  @Get()
  findAll(): Promise<IApplication[]> {
    return this.applicationsService.findMany();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findApplicationOrFail(id);
  }

  @Put(':id')
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
  @Roles(Role.ADMIN, Role.MODERATOR)
  async remove(@Param('id', ParseIntPipe) id: number, @User() user: UserModel) {
    if (! await this.applicationsService.canModerateApplication(id, user.id)) {
      throw new UnauthorizedException();
    }

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
