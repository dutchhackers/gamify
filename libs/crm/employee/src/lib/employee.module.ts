import { BadgeModule } from '@crm/badge';
import { DataModule } from '@crm/data';
import { ProjectModule } from '@crm/project';
import { Module } from '@nestjs/common';
import { EmployeesResolver } from './resolvers/employee.resolver';
import { EmployeeService } from './services';

@Module({
  imports: [DataModule, BadgeModule, ProjectModule],
  controllers: [],
  providers: [EmployeeService, EmployeesResolver],
  exports: [EmployeeService],
})
export class EmployeeModule {}
