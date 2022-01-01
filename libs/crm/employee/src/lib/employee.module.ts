import { BadgeModule } from '@crm/badge';
import { DataModule } from '@crm/data';
import { Module } from '@nestjs/common';
import { EmployeeBadgeResolver } from './resolvers/employee-badges.resolver';
import { EmployeesResolver } from './resolvers/employee.resolver';
import { EmployeeBadgeService, EmployeeService } from './services';

@Module({
  imports: [DataModule, BadgeModule],
  controllers: [],
  providers: [EmployeeService, EmployeesResolver, EmployeeBadgeService, EmployeeBadgeResolver],
  exports: [EmployeeService, EmployeeBadgeService],
})
export class EmployeeModule {}
