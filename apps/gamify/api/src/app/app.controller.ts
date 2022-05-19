import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The root of the API',
  })
  getData() {
    return {
      "message": "Welcome to gamify-api!",
    }
  }
}
