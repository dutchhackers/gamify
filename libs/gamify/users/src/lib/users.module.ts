import { DataModule } from '@gamify/data';
import { ApplicationsService, BadgesService, GamifySharedModule, UsersService } from '@gamify/shared';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ApplicationsService, BadgesService],
  exports: [],
  imports: [DataModule, GamifySharedModule],
})
export class UsersModule {}
