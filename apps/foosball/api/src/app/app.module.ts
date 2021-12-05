import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DataModule } from '@foosball/data';
import { FoosballPlayerModule } from '@foosball/player';

@Module({
  imports: [DataModule, FoosballPlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
