import { AuthModule } from '@crm/auth';
import { BadgeModule } from '@crm/badge';
import { CoreModule } from '@crm/core';
import { DataModule } from '@crm/data';
import { EmployeeModule } from '@crm/employee';
import { ProjectModule } from '@crm/project';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DataModule, CoreModule, AuthModule, EmployeeModule, ProjectModule, BadgeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
