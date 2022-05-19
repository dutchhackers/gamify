import { DataModule, ApplicationsService, BadgesService, UsersService } from '@gamify/data';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ApplicationsService, BadgesService],
  exports: [],
  imports: [DataModule],
})
export class UsersModule {}
