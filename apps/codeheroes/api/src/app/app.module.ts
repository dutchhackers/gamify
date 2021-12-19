import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoreModule } from '@codeheroes/core';
import { AuthModule } from '@codeheroes/auth';
import { DataModule } from '@codeheroes/data';
import { PlayerModule } from '@codeheroes/player';
import { GameModule } from '@codeheroes/game';

@Module({
  imports: [DataModule, CoreModule, AuthModule, PlayerModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
