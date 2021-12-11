import { DataModule } from '@foosball/data';
import { FoosballProfileModule } from '@foosball/profile';
import { Module } from '@nestjs/common';
import { FoosballPlayerService } from './foosball-player.service';
import { PlayerResolver } from './resolvers/player.resolver';

@Module({
  imports: [DataModule, FoosballProfileModule],
  providers: [PlayerResolver, FoosballPlayerService],
  exports: [FoosballPlayerService],
})
export class FoosballPlayerModule {}
