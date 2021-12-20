import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Player } from '../models/player.model';
import { PlayerService } from '../player.service';

@Resolver(() => Player)
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService) {}

  // @Query(() => [Player], { name: 'players' })
  // findMany() {
  //   return this.playerService.findMany();
  // }

  @Query(() => Player, { name: 'player' })
  findOne(@Args('email', { type: () => String }) email: string) {
    return this.playerService.findOne(email);
  }

}
