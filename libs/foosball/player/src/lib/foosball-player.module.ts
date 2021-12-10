import { DataModule } from '@foosball/data';
import { Module } from '@nestjs/common';
import { FoosballPlayerService } from './foosball-player.service';
import { PlayerResolver } from './resolvers/player.resolver';

@Module({
  imports: [DataModule],
  providers: [PlayerResolver, FoosballPlayerService],
  exports: [FoosballPlayerService],
})
export class FoosballPlayerModule {}
