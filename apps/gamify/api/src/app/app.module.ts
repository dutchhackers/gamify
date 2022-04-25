import { Module } from '@nestjs/common';
import { ApplicationsModule } from '@gamify/application';
import { DataModule } from '@gamify/data';
import { CoreModule } from '@gamify/core';
import { AuthModule, FirebaseAuthGuard, RolesGuard } from '@gamify/auth';
import { UsersModule } from '@gamify/users';
import { BadgesModule } from '@gamify/badge';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DataModule, ApplicationsModule, CoreModule, AuthModule, UsersModule, BadgesModule],
  controllers: [AppController],
  providers: [AppService, FirebaseAuthGuard, RolesGuard],
})
export class AppModule {}
