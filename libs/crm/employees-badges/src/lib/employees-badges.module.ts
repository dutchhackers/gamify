import { BadgeModule } from '@crm/badge';
import { DataModule } from '@crm/data';
import { EmployeeModule } from '@crm/employee';
import { Module } from '@nestjs/common';
import { BadgeAwardedResolver } from './resolvers/badge-awarded.resolver';
import { BadgeAwardedsResolver } from './resolvers/badge-awardeds.resolver';
import { EmployeeBadgeResolver } from './resolvers/employee-badge.resolver';
import { EmployeeBadgesResolver } from './resolvers/employee-badges.resolver';
import { EmployeesBadgesService } from './services';

@Module({
  imports: [DataModule, BadgeModule, EmployeeModule],
  providers: [EmployeesBadgesService, EmployeeBadgeResolver, EmployeeBadgesResolver, BadgeAwardedResolver, BadgeAwardedsResolver],
  exports: [],
})
export class EmployeesBadgesModule {}
