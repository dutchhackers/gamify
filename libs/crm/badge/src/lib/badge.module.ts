import { DataModule } from '@crm/data';
import { Module } from '@nestjs/common';
import { BadgeService, BadgeAwardedService } from './services';
import { BadgesResolver } from './resolvers/badges.resolver';
import { BadgeAwardedResolver } from './resolvers/badge-awarded.resolver';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [BadgeService, BadgesResolver, BadgeAwardedService, BadgeAwardedResolver],
  exports: [BadgeService],
})
export class BadgeModule {}
