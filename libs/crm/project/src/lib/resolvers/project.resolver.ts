import { GqlAuthGuard } from '@crm/auth';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProjectsArgs } from '../dto/projects.args';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  // @Query(() => Project)
  // async project(@Args('id') id: number): Promise<Project> {
  //   const project = await this.projectsService.findOneById(id);
  //   if (!project) {
  //     throw new NotFoundException(id);
  //   }
  //   return project;
  // }

  @Query(() => [Project])
  projects(@Args() projectsArgs: ProjectsArgs): Promise<Project[]> {
    return this.projectService.findAll(projectsArgs);
  }
}
