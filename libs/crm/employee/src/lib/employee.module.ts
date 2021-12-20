import { DataModule } from '@crm/data';
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeesResolver } from './resolvers/employee.resolver';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [EmployeeService, EmployeesResolver],
  exports: [EmployeeService],
})
export class EmployeeModule {}
