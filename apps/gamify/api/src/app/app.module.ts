import { Module } from '@nestjs/common';
import { AppsModule } from '@gamify/apps';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
