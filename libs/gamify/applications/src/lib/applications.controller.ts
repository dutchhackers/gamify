import { Controller, Get } from '@nestjs/common';
import { ApplicationsService } from './applications.service';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Get()
  getAll() {
    return this.applicationsService.getAll();
  }
}
