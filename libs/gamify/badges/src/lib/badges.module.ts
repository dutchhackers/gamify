import { DataModule } from '@gamify/data';
import { ApplicationsService, BadgesService, GamifySharedModule, UsersService } from '@gamify/shared';
import { Module } from '@nestjs/common';
import { BadgesController } from './badges.controller';

@Module({
  imports: [DataModule, GamifySharedModule],
  controllers: [BadgesController],
  providers: [BadgesService, ApplicationsService, UsersService],
  exports: [],
})
export class BadgesModule {}
