import { GqlAuthGuard } from '@crm/auth';
import { Project } from '@crm/core';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProjectsArgs } from '../dto/projects.args';
import { ProjectService } from '../services/project.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => Project)
  async project(@Args('id') id: number): Promise<Project> {
    const project = await this.projectService.findOneById(id);
    if (!project) {
      throw new NotFoundException(id);
    }
    return project;
  }

  @Query(() => [Project])
  projects(@Args() projectsArgs: ProjectsArgs): Promise<Project[]> {
    return this.projectService.findAll(projectsArgs);
  }
}
