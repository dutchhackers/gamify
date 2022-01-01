import { Badge, BadgeService } from '@crm/badge';
import { DataService } from '@crm/data';
import { Injectable } from '@nestjs/common';
import { EmployeeBadge } from '../models';

const TAB_EMPLOYEE_BADGES = 'EmployeeBadges';

@Injectable()
export class EmployeeBadgeService {
  constructor(private data: DataService, private badgeService: BadgeService) {}

  async findAll(): Promise<EmployeeBadge[]> {
    return this.getEmployeeBadges();
  }

  async findAllByEmployeeId(employeeId: string): Promise<Badge[]> {
    const data = await this.getEmployeeBadges();
    const badges = await this.badgeService.findAll();

    return data.filter(e => e.employeeId === employeeId).map(e => badges.find(p => p.id === e.badgeId));
  }

  private async getEmployeeBadges() {
    const rows = await this.data.getSpreadsheetRows(TAB_EMPLOYEE_BADGES);
    return rows.map((row: any) => EmployeeBadge.fromRow(row)).filter(e => e.employeeId);
  }
}
