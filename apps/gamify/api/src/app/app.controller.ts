import { DataService } from '@gamify/data';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dataService: DataService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  
  @Get('test')
  async testAction() {

    // const users = await this.dataService.allApplications();

    // return users;

    return { 'blah': 'blah2' };
  }
}
