import { Player, PlayerService } from '@foosball/player';
import { Context, ResolveField, Resolver, Root } from '@nestjs/graphql';
import { MatchEvent } from '../models/match-event.model';

@Resolver(() => MatchEvent)
export class MatchEventResolver {
  constructor(private readonly playerService: PlayerService) {}

  @ResolveField()
  async player(@Root() matchEvent: MatchEvent, @Context() ctx): Promise<Player> {
    return this.playerService.findOne({ id: matchEvent.matchPlayerId });
  }
}
