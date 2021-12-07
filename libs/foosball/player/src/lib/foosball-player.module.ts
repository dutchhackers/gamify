import { DataModule } from '@foosball/data';
import { Module } from '@nestjs/common';
import { FoosballPlayerService } from './foosball-player.service';

@Module({
  imports: [DataModule],
  providers: [FoosballPlayerService],
  exports: [FoosballPlayerService],
})
export class FoosballPlayerModule {}
