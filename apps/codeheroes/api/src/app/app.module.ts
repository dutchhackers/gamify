import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoreModule } from '@codeheroes/core';
import { AuthModule } from '@codeheroes/auth';
import { DataModule } from '@codeheroes/data';
import { PlayerModule } from '@codeheroes/player';

@Module({
  imports: [DataModule, CoreModule, AuthModule, PlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
