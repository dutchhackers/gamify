import { BadgeAwarded } from '@crm/core';
import { DataService } from '@crm/data';
import { Injectable } from '@nestjs/common';
// import { Badge } from '../models';
// import { BadgeService } from '../services';

const TAB_EMPLOYEE_BADGES = 'EmployeeBadges';

@Injectable()
export class BadgeAwardedService {
  constructor(
    private data: DataService // , private badgeService: BadgeService
  ) {}

  async findAll(): Promise<BadgeAwarded[]> {
    return this.getAwardedBadges();
  }

  // async findAllByEmployeeId(employeeId: string): Promise<Badge[]> {
  //   const data = await this.getAwardedBadges();
  //   const badges = await this.badgeService.findAll();

  //   return data.filter(e => e.employeeId === employeeId).map(e => badges.find(p => p.id === e.badgeId));
  // }

  private async getAwardedBadges() {
    const rows = await this.data.getSpreadsheetRows(TAB_EMPLOYEE_BADGES);
    return rows.map(row => BadgeAwarded.fromRow(row)).filter(e => e.employeeId);
  }
}
