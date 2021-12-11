import { DataModule } from '@foosball/data';
import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchResolver } from './resolvers/match.resolver';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [MatchResolver, MatchService],
  exports: [MatchService],
})
export class MatchModule {}
