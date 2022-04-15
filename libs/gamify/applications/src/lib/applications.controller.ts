import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationInput } from './dto/create-application.input';
import { UpdateApplicationInput } from './dto/update-application.input';
import { Response } from 'express';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Post()
  create(@Body() createApplicationInput: CreateApplicationInput) {
    // TODO Validate current user id, should be obtained from current authenticated user.
    createApplicationInput.adminUserId = 1;
    const result = this.applicationsService.create(createApplicationInput);

    return result;
  }

  @Get()
  findAll() {
    return this.applicationsService.findMany();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
    const app = await this.applicationsService.findOne(id);

    if (app == null) {
      response.status(HttpStatus.NOT_FOUND).send({ 
        'error': 'Application not found',
        'statusCode': 404
      });
      return;
    }

    response.send(app);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateApplicationInput: UpdateApplicationInput) {
    console.log(updateApplicationInput);
    return `Id: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `Id: ${id}`;
  }
}
