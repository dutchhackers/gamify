import { Module } from '@nestjs/common';
import { ApplicationsModule } from '@gamify/application';
import { DataModule } from '@gamify/data';
import { CoreModule } from '@gamify/core';
import { AuthModule } from '@gamify/auth';
import { UsersModule } from '@gamify/users';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DataModule, ApplicationsModule, CoreModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
