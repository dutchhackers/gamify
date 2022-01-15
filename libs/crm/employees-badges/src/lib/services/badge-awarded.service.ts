import { BadgeAwarded } from '@crm/core';
import { DataService } from '@crm/data';
import { Injectable } from '@nestjs/common';

const TAB_EMPLOYEE_BADGES = 'EmployeeBadges';

@Injectable()
export class BadgeAwardedService {
  constructor(
    private data: DataService // , private badgeService: BadgeService
  ) {}

  async findAll(): Promise<BadgeAwarded[]> {
    return this.getAwardedBadges();
  }

  private async getAwardedBadges() {
    const rows = await this.data.getSpreadsheetRows(TAB_EMPLOYEE_BADGES);
    return rows.map(row => BadgeAwarded.fromRow(row)).filter(e => e.employeeId);
  }
}
