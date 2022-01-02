import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { BadgeService } from '../badge.service';
import { Badge } from '../models';

@Resolver(() => Badge)
export class BadgesResolver {
  constructor(private readonly badgeService: BadgeService) {}

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
}
