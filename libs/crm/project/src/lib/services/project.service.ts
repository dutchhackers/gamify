import { JiraProjectStatus, Project } from '@crm/core';
import { DataService } from '@crm/data';
import { Injectable, Logger } from '@nestjs/common';
import { ProjectsArgs } from '../dto/projects.args';

const TAB_PROJECTS = 'Projects';

@Injectable()
export class ProjectService {
  constructor(private readonly data: DataService) {}
  async findOneById(id: number): Promise<Project> {
    Logger.log(`Getting project with id ${id}...`);

    const projects = await this.findAll();
    return projects.find(e => e.id === id);
  }

  async findAll(projectsArgs: ProjectsArgs = {}): Promise<Project[]> {
    Logger.log(`Find projects ${JSON.stringify(projectsArgs)}...`);
    let data = await this.getProjects();

    // Filter by JIRA Key
    data = this.filterByJiraKey(data, projectsArgs.jiraKey);

    // Filter by JIRA Project Status
    data = this.filterByJiraProjectStatus(data, projectsArgs.jiraProjectStatus);

    return data;
  }

  private filterByJiraKey(projects: Project[], jiraKey: string): Project[] {
    if (!jiraKey) {
      return projects;
    }
    return projects.filter(p => p.jiraKey === jiraKey);
  }

  private filterByJiraProjectStatus(projects: Project[], jiraProjectStatus: JiraProjectStatus): Project[] {
    if (!jiraProjectStatus) {
      return projects;
    }
    return projects.filter(p => p.status === jiraProjectStatus);
  }

  private async getProjects() {
    const rows = await this.data.getSpreadsheetRows(TAB_PROJECTS);
    return rows.map(row => Project.fromRow(row)).filter(e => e.id);
  }
}
