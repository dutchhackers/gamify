import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DataModule } from '@foosball/data';
import { FoosballPlayerModule } from '@foosball/player';
import { FoosballMatchModule } from '@foosball/match';

@Module({
  imports: [DataModule, FoosballPlayerModule, FoosballMatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
