import { FoosballPlayerService } from '@foosball/player';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly playerService: FoosballPlayerService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('players')
  getUser() {
    return this.playerService.players();
  }

}
