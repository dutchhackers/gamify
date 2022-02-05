import { GqlAuthGuard } from '@crm/auth';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeesArgs } from '../dto/employees.args';
import { Employee, EmployeeBadge, EmployeeProject } from '@crm/dto';
import { EmployeeService } from '../services';

@UseGuards(GqlAuthGuard)
@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(
    private readonly employeeService: EmployeeService // private readonly employeeBadgeService: EmployeeBadgeService, // private readonly employeeProjectService: EmployeeProjectService
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

  //   const allEmployeeProjects = await this.employeeProjectService.findAll();
  //   return allEmployeeProjects.filter(project => project.employeeId === id);
  // }

  // @ResolveField('badges', () => [EmployeeBadge])
  // async getEmployeeBadges(@Parent() employee: Employee) {
  //   const { id } = employee;

  //   const allEmployeeBadges = await this.employeeBadgeService.findAll();
  //   return allEmployeeBadges.filter(badge => badge.employeeId === id);
  // }
}
