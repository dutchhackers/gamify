import { Badge, BadgeAwarded } from '@crm/core';
// import { EmployeeService } from '@crm/employee';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { BadgeService } from '../services';

@Resolver(() => BadgeAwarded)
export class BadgeAwardedResolver {
  constructor(
    private readonly badgeService: BadgeService //, private readonly employeeService: EmployeeService
  ) {}

  @ResolveField('badge', () => Badge)
  async getBadge(@Parent() parent: BadgeAwarded) {
    const { badgeId } = parent;
    return this.badgeService.findOneById(badgeId);
  }

  // @ResolveField('employee', () => Employee)
  // async getEmployee(@Parent() parent: BadgeAwarded) {
  //   const { employeeId } = parent;
  //   return this.employeeService.findOneById(employeeId);
  // }
}
