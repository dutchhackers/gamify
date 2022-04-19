import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationInput } from './dto/create-application.input';
import { UpdateApplicationInput } from './dto/update-application.input';
import { Response } from 'express';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Post()
  async create(@Body() createApplicationInput: CreateApplicationInput, @Res() response: Response) {
    if (! await this.applicationsService.isNameUnique(createApplicationInput.name)) {
      response.status(HttpStatus.BAD_REQUEST).send({ 
        'error': 'Bad Request',
        'statusCode': 400,
        'message': ["Name must be unique"]
      });
      return;
    }

    // TODO Validate current user id, should be obtained from current authenticated user.
    createApplicationInput.adminUserId = 1;

    response.send(await this.applicationsService.create(createApplicationInput));
  }

  @Get()
  findAll() {
    return this.applicationsService.findMany();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
    const app = await this.applicationsService.findOne(id);

    if (app === null) {
      response.status(HttpStatus.NOT_FOUND).send({ 
        'error': 'Application not found',
        'statusCode': 404
      });
      return;
    }

    response.send(app);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateApplicationInput: UpdateApplicationInput, @Res() response: Response) {
    if (! await this.applicationsService.isNameUnique(updateApplicationInput.name)) {
      response.status(HttpStatus.BAD_REQUEST).send({ 
        'error': 'Bad Request',
        'statusCode': 400,
        'message': ["Name must be unique"]
      });
      return;
    }

    response.send(await this.applicationsService.update(id, updateApplicationInput));
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
    const app = await this.applicationsService.findOne(id);

    if (app === null) {
      response.status(HttpStatus.NOT_FOUND).send({ 
        'error': 'Application to delete not found',
        'statusCode': 404
      });
      return;
    }

    return response.send(await this.applicationsService.remove(id));
  }
}
