import { GqlAuthGuard } from '@crm/auth';
import { Employee, EmployeeProject } from '@crm/core';
import { UseGuards } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeeProjectService } from '../services';

@UseGuards(GqlAuthGuard)
@Resolver(() => Employee)
export class EmployeeProjectResolver {
  constructor(private readonly employeeProjectService: EmployeeProjectService) {}

  @ResolveField('projects', () => [EmployeeProject])
  async getProjects(@Parent() employee: Employee) {
    const { id } = employee;

    const allEmployeeProjects = await this.employeeProjectService.findAll();
    return allEmployeeProjects.filter(project => project.employeeId === id);
  }
}
