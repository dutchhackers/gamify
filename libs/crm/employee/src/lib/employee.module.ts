import { DataModule } from '@crm/data';
import { Module } from '@nestjs/common';
import { EmployeeBadgeService } from './employee-badge.service';
import { EmployeeService } from './employee.service';
import { EmployeeBadgeResolver } from './resolvers/employee-badges.resolver';
import { EmployeesResolver } from './resolvers/employee.resolver';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [EmployeeService, EmployeesResolver, EmployeeBadgeService, EmployeeBadgeResolver],
  exports: [EmployeeService, EmployeeBadgeService],
})
export class EmployeeModule {}
