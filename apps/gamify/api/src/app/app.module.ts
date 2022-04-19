import { Module } from '@nestjs/common';
import { ApplicationsModule } from '@gamify/application';
import { DataModule } from '@gamify/data';
import { BadgesModule } from '@gamify/badge';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DataModule, ApplicationsModule, BadgesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
