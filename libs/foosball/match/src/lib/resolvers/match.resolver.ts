import { Resolver, Query, Mutation, Args, Int, ResolveField, Context, Root } from '@nestjs/graphql';
import { MatchService as MatchService } from '../match.service';
import { CreateMatchInput } from '../dto/create-match.input';
import { Match } from '../models/match.model';
import { DataService } from '@foosball/data';
import { Player } from '@foosball/player';

@Resolver(() => Match)
export class MatchResolver {
  constructor(private readonly data: DataService, private readonly matchService: MatchService) {}

  @ResolveField()
  async players(@Root() match: Match, @Context() ctx): Promise<Player[]> {
    // NOTE: actually we don't want to use this.data in a resolver directly
    // In search for a better solution
    const playersInMatch = await this.data.playersInMatches.findMany({
      where: {
        matchId: match.id,
      },
      include: {
        player: true,
      },
    });

    return playersInMatch.map(playerInMatch => playerInMatch.player);
  }

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
