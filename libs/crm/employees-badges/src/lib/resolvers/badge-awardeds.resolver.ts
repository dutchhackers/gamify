import { BadgeService } from '@crm/badge';
import { Badge, BadgeAwarded, Employee } from '@crm/dto';
import { EmployeeService } from '@crm/employee';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

@Resolver(() => BadgeAwarded)
export class BadgeAwardedsResolver {
  constructor(private readonly badgeService: BadgeService, private readonly employeeService: EmployeeService) {}

  @ResolveField('badge', () => Badge)
  async getBadge(@Parent() parent: BadgeAwarded) {
    const { badgeId } = parent;
    return this.badgeService.findOneById(badgeId);
  }

  @ResolveField('employee', () => Employee)
  async getEmployee(@Parent() parent: BadgeAwarded) {
    const { employeeId } = parent;
    return this.employeeService.findOneById(employeeId);
  }
}
