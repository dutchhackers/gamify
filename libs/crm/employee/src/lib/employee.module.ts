import { BadgeModule } from '@crm/badge';
import { DataModule } from '@crm/data';
import { ProjectModule } from '@crm/project';
import { Module } from '@nestjs/common';
import { EmployeeBadgeResolver } from './resolvers/employee-badges.resolver';
import { EmployeeProjectsResolver } from './resolvers/employee-projects.resolver';
import { EmployeesResolver } from './resolvers/employee.resolver';
import { EmployeeBadgeService, EmployeeProjectService, EmployeeService } from './services';

@Module({
  imports: [DataModule, BadgeModule, ProjectModule],
  controllers: [],
  providers: [
    EmployeeService,
    EmployeesResolver,
    EmployeeBadgeService,
    EmployeeBadgeResolver,
    EmployeeProjectService,
    EmployeeProjectsResolver,
  ],
  exports: [EmployeeService, EmployeeBadgeService],
})
export class EmployeeModule {}
