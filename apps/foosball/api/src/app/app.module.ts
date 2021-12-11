import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DataModule } from '@foosball/data';
import { CoreModule } from '@foosball/core';
import { FoosballPlayerModule } from '@foosball/player';
import { FoosballMatchModule } from '@foosball/match';
import { FoosballProfileModule } from '@foosball/profile';

@Module({
  imports: [DataModule, CoreModule, FoosballPlayerModule, FoosballProfileModule, FoosballMatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
