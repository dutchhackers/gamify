import { Args, Query, Resolver } from '@nestjs/graphql';
import { GameService } from '../game.service';
import { Game } from '../models';

@Resolver(() => Game)
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Query(() => [Game], { name: 'games' })
  findMany() {
    return this.gameService.findMany();
  }

  @Query(() => Game, { name: 'game' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.gameService.findOne(id);
  }

}
