import { FoosballPlayerService } from '@foosball/player';
import { FoosballMatchService } from '@foosball/match';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly playerService: FoosballPlayerService, private readonly matchService: FoosballMatchService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('players')
  getUsers() {
    return this.playerService.players();
  }

  @Get('matches')
  getMatches() {
    return this.matchService.matches();
  }
}
