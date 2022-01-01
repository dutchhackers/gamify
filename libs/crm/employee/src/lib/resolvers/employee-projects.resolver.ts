import { Project, ProjectService } from '@crm/project';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Employee, EmployeeProject } from '../models';
import { EmployeeProjectService, EmployeeService } from '../services';

@Resolver(() => EmployeeProject)
export class EmployeeProjectsResolver {
  constructor(
    private readonly employeeProjectService: EmployeeProjectService,
    private readonly projectService: ProjectService,
    private readonly employeeService: EmployeeService
  ) {}

  @Query(() => [EmployeeProject])
  employeeProjects(): Promise<EmployeeProject[]> {
    return this.employeeProjectService.findAll();
  }

  @ResolveField('employee', () => Employee)
  getEmployee(@Parent() employeeProject: EmployeeProject) {
    const { employeeId } = employeeProject;
    return this.employeeService.findOneById(employeeId);
  }
  @ResolveField('project', () => Project)
  getProject(@Parent() employeeProject: EmployeeProject) {
    const { projectId } = employeeProject;
    return this.projectService.findOneById(projectId);
  }

  @ResolveField('active', () => Boolean)
  async getStatusActive(@Parent() employeeProject: EmployeeProject) {
    return employeeProject.active;
  }
}
