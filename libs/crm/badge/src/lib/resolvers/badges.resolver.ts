import { Badge, BadgeAwarded } from '@crm/core';
import { NotFoundException } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BadgeService, BadgeAwardedService } from '../services';

@Resolver(() => Badge)
export class BadgesResolver {
  constructor(private readonly badgeService: BadgeService, private readonly badgeAwardedService: BadgeAwardedService) {}

  @Query(() => Badge)
  async badge(@Args('id') id: number): Promise<Badge> {
    const badge = await this.badgeService.findOneById(id);
    if (!badge) {
      throw new NotFoundException(id);
    }
    return badge;
  }

  @Query(() => [Badge])
  badges(): Promise<Badge[]> {
    return this.badgeService.findAll();
  }

  @ResolveField('awarded', () => [BadgeAwarded])
  async getBadgeAwarded(@Parent() badge: Badge) {
    const { id } = badge;

    const allAwardedBadges = await this.badgeAwardedService.findAll();
    return allAwardedBadges.filter(badge => badge.badgeId === id);
    // return [];
  }
}
