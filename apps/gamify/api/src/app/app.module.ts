import { Module } from '@nestjs/common';
import { AppsModule } from '@gamify/apps';
import { DataModule } from '@gamify/data';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppsModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
