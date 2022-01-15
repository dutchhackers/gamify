import { GqlAuthGuard } from '@crm/auth';
import { Employee, EmployeeBadge } from '@crm/core';
import { UseGuards } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeesBadgesService } from '../services';

@UseGuards(GqlAuthGuard)
@Resolver(() => Employee)
export class EmployeeBadgeResolver {
  constructor(private readonly employeesBadgeService: EmployeesBadgesService) {}

  @ResolveField('badges', () => [EmployeeBadge])
  async getBadges(@Parent() employee: Employee) {
    const { id } = employee;

    const allEmployeeBadges = await this.employeesBadgeService.findAll();
    return allEmployeeBadges.filter(project => project.employeeId === id);
  }
}
