import { DataModule } from '@crm/data';
import { ProjectModule } from '@crm/project';
import { EmployeeModule } from '@crm/employee';
import { Module } from '@nestjs/common';
import { EmployeeProjectService } from './services';
import { EmployeeProjectsResolver } from './resolvers/employee-projects.resolver';
import { EmployeeProjectResolver } from './resolvers/employee-project.resolver';

@Module({
  imports: [DataModule, ProjectModule, EmployeeModule],
  providers: [EmployeeProjectService, EmployeeProjectsResolver, EmployeeProjectResolver],
  exports: [],
})
export class EmployeesProjectsModule {}
