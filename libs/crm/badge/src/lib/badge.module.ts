import { DataModule } from '@crm/data';
import { Module } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { BadgesResolver } from './resolvers/badges.resolver';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [BadgeService, BadgesResolver],
  exports: [BadgeService],
})
export class BadgeModule {}
