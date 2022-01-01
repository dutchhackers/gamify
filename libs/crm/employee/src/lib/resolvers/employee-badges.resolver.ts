// import { Badge, BadgeService } from '@crm/badge';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeeBadgeService } from '../employee-badge.service';
import { EmployeeService } from '../employee.service';
import { Employee, EmployeeBadge } from '../models';

@Resolver(() => EmployeeBadge)
export class EmployeeBadgeResolver {
  constructor(
    private readonly employeeBadgeService: EmployeeBadgeService,
    private readonly employeeService: EmployeeService // private readonly badgeService: BadgeService
  ) {}

  @Query(() => [EmployeeBadge])
  employeeBadges(): Promise<EmployeeBadge[]> {
    return this.employeeBadgeService.findAll();
  }

  @ResolveField('employee', () => Employee)
  getProject(@Parent() employeeBadge: EmployeeBadge) {
    const { employeeId } = employeeBadge;
    return this.employeeService.findOneById(employeeId + '');
  }

  // @ResolveField('badge', () => Badge)
  // getBadge(@Parent() employeeBadge: EmployeeBadge) {
  //   const { badgeId } = employeeBadge;
  //   return this.badgeService.findOneById(badgeId);
  // }
}
