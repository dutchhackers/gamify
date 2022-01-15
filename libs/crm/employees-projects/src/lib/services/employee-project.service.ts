import { Injectable } from '@nestjs/common';
import { DataService } from '@crm/data';
import { ProjectService } from '@crm/project';
import { EmployeeProject, Project } from '@crm/core';

const TAB_EMPLOYEE_PROJECTS = 'EmployeeProjects';

@Injectable()
export class EmployeeProjectService {
  constructor(private data: DataService, private projectService: ProjectService) {}

  async findAll(): Promise<EmployeeProject[]> {
    return this.getEmployeeProjects();
  }

  async findAllByEmployeeId(employeeId: string): Promise<Project[]> {
    const data = await this.getEmployeeProjects();
    const projects = await this.projectService.findAll();

    return data.filter(e => e.employeeId === employeeId).map(e => projects.find(p => p.id === e.projectId));
  }

  private async getEmployeeProjects() {
    const rows = await this.data.getSpreadsheetRows(TAB_EMPLOYEE_PROJECTS);
    return rows.map(row => EmployeeProject.fromRow(row)).filter(e => e.employeeId);
  }
}
