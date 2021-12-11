import { Args, Context, Int, Mutation, Query, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { Player } from '../models/player.model';
import { PlayerService } from '../player.service';
import { ProfileService } from '@foosball/profile';
import { Profile } from '@foosball/profile';
import { CreatePlayerInput } from '../dto/create-player.input';

@Resolver(() => Player)
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService, private readonly profileService: ProfileService) {}

  @ResolveField()
  async profile(@Root() player: Player, @Context() ctx): Promise<Profile> {
    return this.profileService.findOne(player.id);
  }

  @Query(() => [Player], { name: 'players' })
  findMany() {
    return this.playerService.findMany();
  }

  @Query(() => Player, { name: 'player' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.playerService.findOne({ id });
  }

  @Mutation(() => Player)
  createPlayer(@Args('createPlayerInput') createPlayerInput: CreatePlayerInput) {
    return this.playerService.create(createPlayerInput);
  }

  @Mutation(() => Player)
  removePlayer(@Args('id', { type: () => Int }) id: number) {
    return this.playerService.remove(id);
  }
}
