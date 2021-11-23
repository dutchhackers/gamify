import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FoosballSharedDataModule } from '@foosball/data';

@Module({
  imports: [FoosballSharedDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
