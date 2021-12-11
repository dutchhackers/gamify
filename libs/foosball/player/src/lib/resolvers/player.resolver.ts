import { Inject } from '@nestjs/common';
import {
  Args,
  Context,
  Int,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
// import { PlayerCreateInput } from 'src/@generated/prisma-nestjs-graphql/player/player-create.input';
import { Player } from '../models/player.model';
import { FoosballPlayerService as PlayerService } from '../foosball-player.service';
import { FoosballProfileService as ProfileService } from '@foosball/profile';
import { Profile } from '@foosball/profile';

@Resolver(() => Player)
export class PlayerResolver {
  constructor( private readonly playerService: PlayerService, private readonly profileService: ProfileService  ) {}

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
    return this.playerService.findOne(id);
  }

  // @Mutation(() => Player)
  // createPlayer(
  //   @Args('createPlayerInput') createPlayerInput: PlayerCreateInput,
  // ) {
  //   return this.playersService.create(createPlayerInput);
  // }

  // @Mutation(() => Player)
  // removePlayer(@Args('id', { type: () => Int }) id: number) {
  //   return this.playersService.remove(id);
  // }
}
