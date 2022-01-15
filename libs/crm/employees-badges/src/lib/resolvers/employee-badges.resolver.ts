import { GqlAuthGuard } from '@crm/auth';
import { BadgeService } from '@crm/badge';
import { Badge, Employee, EmployeeBadge } from '@crm/core';
import { EmployeeService } from '@crm/employee';
import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeesBadgesService } from '../services';

@UseGuards(GqlAuthGuard)
@Resolver(() => EmployeeBadge)
export class EmployeeBadgesResolver {
  constructor(
    private readonly employeesBadgeService: EmployeesBadgesService,
    private readonly employeeService: EmployeeService,
    private readonly badgeService: BadgeService
  ) {}

  @Query(() => [EmployeeBadge])
  employeeBadges(): Promise<EmployeeBadge[]> {
    return this.employeesBadgeService.findAll();
  }

  @ResolveField('employee', () => Employee)
  getProject(@Parent() employeeBadge: EmployeeBadge) {
    const { employeeId } = employeeBadge;
    return this.employeeService.findOneById(employeeId + '');
  }

  @ResolveField('badge', () => Badge)
  getBadge(@Parent() employeeBadge: EmployeeBadge) {
    const { badgeId } = employeeBadge;
    return this.badgeService.findOneById(badgeId);
  }
}
