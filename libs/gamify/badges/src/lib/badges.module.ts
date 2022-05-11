import { DataModule, ApplicationsService, BadgesService, UsersService } from '@gamify/data';
import { Module } from '@nestjs/common';
import { BadgesController } from './badges.controller';

@Module({
  imports: [DataModule],
  controllers: [BadgesController],
  providers: [BadgesService, ApplicationsService, UsersService],
  exports: [],
})
export class BadgesModule {}
