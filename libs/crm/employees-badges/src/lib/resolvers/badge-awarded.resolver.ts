import { Badge, BadgeAwarded } from '@crm/core';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { BadgeAwardedService } from '../services';

@Resolver(() => Badge)
export class BadgeAwardedResolver {
  constructor(private readonly badgeAwardedService: BadgeAwardedService) {}

  @ResolveField('awarded', () => [BadgeAwarded])
  async getBadgeAwarded(@Parent() badge: Badge) {
    const { id } = badge;

    const allAwardedBadges = await this.badgeAwardedService.findAll();
    return allAwardedBadges.filter(badge => badge.badgeId === id);
  }
}
