import { DataModule, ApplicationsService, UsersService } from '@gamify/data';
import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';

@Module({
  imports: [DataModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService, UsersService],
  exports: [],
})
export class ApplicationsModule {}
