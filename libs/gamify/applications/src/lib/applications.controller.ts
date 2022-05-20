import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, UnauthorizedException } from '@nestjs/common';
import { CreateApplicationInput } from './dto/create-application.input';
import { UpdateApplicationInput } from './dto/update-application.input';
import { Application, ApplicationUser, Role } from '@gamify/shared';
import { Roles, User, UserModel } from '@gamify/auth';
import { ApplicationsService } from '@gamify/data';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('applications')
@ApiBearerAuth()
@Controller('applications')
export class ApplicationsController {
  constructor(
    private applicationsService: ApplicationsService,
  ) {}

  @ApiCreatedResponse({ type: Application, description: 'The created application' })
  @Post()
  @Roles(Role.ADMIN, Role.MODERATOR)
  async create(@Body() createApplicationInput: CreateApplicationInput, @User() user: UserModel): Promise<Application> {
    createApplicationInput.ownerUserId = user.id;

    return await this.applicationsService.create(createApplicationInput);
  }

  @ApiOkResponse({ type: [Application], description: 'List of applications' })
  @Get()
  findAll(): Promise<Application[]> {
    return this.applicationsService.findMany();
  }

  @ApiOkResponse({ type: Application, description: 'Single application' })
  @ApiNotFoundResponse({ description: 'Application not found' })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Application> {
    return this.findApplicationOrFail(id);
  }

  @ApiOkResponse({ type: Application, description: 'The updated application' })
  @ApiUnauthorizedResponse({ description: 'User is authorized to modify this application' })
  @ApiNotFoundResponse({ description: 'Application not found' })
  @Put(':id')
  @Roles(Role.ADMIN, Role.MODERATOR)
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateApplicationInput: UpdateApplicationInput, @User() user: UserModel): Promise<Application> {
    if (! await this.applicationsService.canModerateApplication(id, user.id)) {
      throw new UnauthorizedException();
    }

    await this.findApplicationOrFail(id);

    return await this.applicationsService.update(id, updateApplicationInput);
  }

  @ApiOkResponse({ type: Application, description: 'The deleted application' })
  @ApiUnauthorizedResponse({ description: 'User is authorized to modify this application' })
  @ApiNotFoundResponse({ description: 'Application not found' })
  @Delete(':id')
  @Roles(Role.ADMIN, Role.MODERATOR)
  async remove(@Param('id', ParseIntPipe) id: number, @User() user: UserModel): Promise<Application> {
    if (! await this.applicationsService.canModerateApplication(id, user.id)) {
      throw new UnauthorizedException();
    }

    await this.findApplicationOrFail(id);

    return await this.applicationsService.remove(id);
  }

  @ApiOkResponse({ type: [ApplicationUser], description: 'A list of users that joined this application' })
  @ApiNotFoundResponse({ description: 'Application not found' })
  @Get('/:id/users')
  async findUsers(@Param('id', ParseIntPipe) id: number): Promise<ApplicationUser[]> {
    await this.findApplicationOrFail(id);

    return this.applicationsService.findApplicationUsers(id);
  }

  @ApiOkResponse({ type: ApplicationUser, description: 'The entry in the application users table' })
  @ApiNotFoundResponse({ description: 'Application not found' })
  @ApiBadRequestResponse({ description: 'User is already a member of this application' })
  @Post('/:id/join')
  async join(@Param('id', ParseIntPipe) id: number, @User() user: UserModel): Promise<ApplicationUser> {
    await this.findApplicationOrFail(id);

    if (await this.applicationsService.findApplicationUser(id, user.id)) {
      throw new BadRequestException("User is already a member of this application");
    }
    
    return this.applicationsService.addUserToApplication(id, user.id);
  }

  @ApiOkResponse({ type: ApplicationUser, description: 'The deleted entry of the application users table' })
  @ApiNotFoundResponse({ description: 'Application not found' })
  @ApiBadRequestResponse({ description: 'User is not a member of this application' })
  @Delete('/:id/leave')
  async leave(@Param('id', ParseIntPipe) id: number, @User() user: UserModel): Promise<ApplicationUser> {
    await this.findApplicationOrFail(id);

    const applicationUser = await this.applicationsService.findApplicationUser(id, user.id);
    if (applicationUser === null) {
      throw new BadRequestException("User is not a member of this application");
    }

    return this.applicationsService.removeUserFromApplication(id, user.id);
  }

  /**
   * Tries to find a application in the database by id. When the applications doesn't exist it throws a NotFoundException
   * 
   * @param id The id of the applications.
   * @returns A application when found in the database.
   */
  private async findApplicationOrFail(id: number): Promise<Application> {
    const app = await this.applicationsService.findOne(id);

    if (app === null) {
      throw new NotFoundException();
    }

    return app;
  }
}
