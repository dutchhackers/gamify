import { Controller, Get } from '@nestjs/common';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

import { AppService } from './app.service';

class AppVersion {
  @ApiProperty()
  version: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: AppVersion,
    description: 'Get App Version',
  })
  getVersion() {
    return <AppVersion>{
      version: '0.1',
    };
  }
}
