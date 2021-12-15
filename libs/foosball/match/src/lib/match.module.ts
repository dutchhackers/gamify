import { DataModule } from '@foosball/data';
import { PlayerModule } from '@foosball/player';
import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchEventResolver } from './resolvers/match-event.resolver';
import { MatchResolver } from './resolvers/match.resolver';

@Module({
  imports: [DataModule, PlayerModule],
  controllers: [],
  providers: [MatchResolver, MatchEventResolver, MatchService],
  exports: [MatchService],
})
export class MatchModule {}
