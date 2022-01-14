import { GoogleSpreadsheetRow, parseDate, parseNumber, parseString } from '@crm/data';
import { Project } from '@crm/project';
import { Field, ObjectType } from '@nestjs/graphql';
import { EmployeeRole } from '@crm/core';
import { Employee } from '../../../../core/src/lib/models/employee.model';

enum FieldMapping {
  EMPLOYEE_ID = 'EmployeeId',
  PROJECT_ID = 'ProjectId',
  START_DATE = 'StartDate',
  END_DATE = 'EndDate',
  ROLE = 'Role',
}

@ObjectType({ description: 'employeeProject ' })
export class EmployeeProject {
  @Field()
  employeeId: string;

  @Field(() => Employee)
  employee: Employee;

  @Field(() => Number)
  projectId: number;

  @Field(() => Project)
  project: Project;

  @Field(() => EmployeeRole)
  role: EmployeeRole;

  @Field({ nullable: true })
  startDate?: Date;

  @Field({ nullable: true })
  endDate?: Date;

  get active() {
    // Easiest check to get started; definitely not rock solid (yet)
    if (this.endDate) {
      return false;
    }
    return true;
  }

  static fromRow(data: GoogleSpreadsheetRow) {
    const obj = Object.assign(new EmployeeProject(), <Partial<EmployeeProject>>{
      employeeId: parseString(data[FieldMapping.EMPLOYEE_ID]),
      projectId: parseNumber(data[FieldMapping.PROJECT_ID]),
      startDate: parseDate(data[FieldMapping.START_DATE]),
      endDate: parseDate(data[FieldMapping.END_DATE]),
      role: data[FieldMapping.ROLE],
    });

    return obj;
  }
}
