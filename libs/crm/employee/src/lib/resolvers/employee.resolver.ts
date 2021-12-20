import { NotFoundException } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeesArgs } from '../dto/employees.args';
// import { EmployeeBadgesService } from '../../src/employee-badges/employee-badges.service';
// import { EmployeeBadge } from '../../src/employee-badges/models/employee-badge.model';
// import { EmployeeProjectsService } from '../../src/employee-projects/employee-projects.service';
// import { EmployeeProject } from '../employee-projects/models/employee-project.model';
// import { EmployeesArgs } from './dto/employees.args';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models';

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(
    private readonly employeeService: EmployeeService // private readonly employeeProjectsService: EmployeeProjectsService, // private readonly employeeBadgesService: EmployeeBadgesService,
  ) {}

  @Query(() => Employee)
  async employee(@Args('id') id: string): Promise<Employee> {
    const employee = await this.employeeService.findOneById(id);
    if (!employee) {
      throw new NotFoundException(id);
    }
    return employee;
  }

  @Query(() => [Employee])
  employees(@Args() employeesArgs: EmployeesArgs): Promise<Employee[]> {
    return this.employeeService.findAll(employeesArgs);
  }

  @ResolveField('fullName', () => String)
  async getFullName(@Parent() employee: Employee) {
    return employee.fullName;
  }

  // @ResolveField('projects', () => [EmployeeProject])
  // async getProjects(@Parent() employee: Employee) {
  //   const { id } = employee;

  //   const allEmployeeProjects = await this.employeeProjectsService.findAll();
  //   return allEmployeeProjects.filter((project) => project.employeeId === id);
  // }

  // @ResolveField('badges', () => [EmployeeBadge])
  // async getEmployeeBadges(@Parent() employee: Employee) {
  //   const { id } = employee;

  //   const allEmployeeBadges = await this.employeeBadgesService.findAll();
  //   return allEmployeeBadges.filter((badge) => badge.employeeId === id);
  // }
}
