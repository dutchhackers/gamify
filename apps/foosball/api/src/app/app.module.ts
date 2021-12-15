import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DataModule } from '@foosball/data';
import { CoreModule } from '@foosball/core';
import { PlayerModule } from '@foosball/player';
import { MatchModule } from '@foosball/match';
import { ProfileModule } from '@foosball/profile';
import { AuthModule } from '@foosball/auth';

@Module({
  imports: [DataModule, CoreModule, AuthModule, PlayerModule, ProfileModule, MatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
