import { Module } from '@nestjs/common';
import { AppsModule } from '@coders/gamify-api/apps';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
