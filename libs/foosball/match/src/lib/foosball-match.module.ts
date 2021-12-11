import { DataModule } from '@foosball/data';
import { Module } from '@nestjs/common';
import { FoosballMatchService } from './foosball-match.service';
import { MatchResolver } from './resolvers/match.resolver';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [MatchResolver, FoosballMatchService],
  exports: [FoosballMatchService],
})
export class FoosballMatchModule {}
