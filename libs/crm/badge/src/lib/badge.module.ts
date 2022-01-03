import { DataModule } from '@crm/data';
import { Module } from '@nestjs/common';
import { BadgeService, BadgeAwardedService } from './services';
import { BadgesResolver } from './resolvers/badges.resolver';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [BadgeService, BadgesResolver, BadgeAwardedService],
  exports: [BadgeService, BadgeAwardedService],
})
export class BadgeModule {}
