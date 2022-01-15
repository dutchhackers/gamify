import { Badge, BadgeAwarded } from '@crm/core';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeesBadgesService } from '../services';

@Resolver(() => Badge)
export class BadgeAwardedResolver {
  constructor(private readonly employeesBadgesService: EmployeesBadgesService) {}

  @ResolveField('awarded', () => [BadgeAwarded])
  async getBadgeAwarded(@Parent() badge: Badge) {
    const { id } = badge;

    const allAwardedBadges = await this.employeesBadgesService.getAwardedBadges();
    return allAwardedBadges.filter(badge => badge.badgeId === id);
  }
}
