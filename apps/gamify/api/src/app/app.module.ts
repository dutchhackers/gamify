import { Module } from '@nestjs/common';
import { ApplicationsModule } from '@gamify/application';
import { DataModule } from '@gamify/data';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DataModule, ApplicationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
