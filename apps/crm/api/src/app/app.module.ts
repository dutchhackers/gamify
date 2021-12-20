import { AuthModule } from '@crm/auth';
import { CoreModule } from '@crm/core';
import { DataModule } from '@crm/data';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DataModule, CoreModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
