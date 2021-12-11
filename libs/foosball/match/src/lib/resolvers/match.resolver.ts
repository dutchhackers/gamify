import { Resolver, Query, Mutation, Args, Int, ResolveField, Context, Root } from '@nestjs/graphql';
import { MatchService as MatchService } from '../match.service';
import { CreateMatchInput } from '../dto/create-match.input';
import { Match } from '../models/match.model';

@Resolver(() => Match)
export class MatchResolver {
  constructor(private readonly matchService: MatchService) {}

  // @ResolveField()
  // async players(@Root() match: Match, @Context() ctx): Promise<Player[]> {
  //   const playersInMatch = await this.prismaService.playersInMatches.findMany({
  //     where: {
  //       matchId: match.id,
  //     },
  //     include: {
  //       player: true,
  //     },
  //   });

  //   return playersInMatch.map((playerInMatch) => playerInMatch.player);
  // }

  @Mutation(() => Match)
  createMatch(@Args('createMatchInput') createMatchInput: CreateMatchInput) {
    return this.matchService.create(createMatchInput);
  }

  @Query(() => [Match], { name: 'matches' })
  findAll() {
    return this.matchService.findMany();
  }

  @Query(() => Match, { name: 'match' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.matchService.findOne({ id });
  }
}
