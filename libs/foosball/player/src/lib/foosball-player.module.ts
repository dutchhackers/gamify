import { DataModule } from '@foosball/data';
import { Module } from '@nestjs/common';
import { FoosballPlayerController } from './foosball-player.controller';
import { FoosballPlayerService } from './foosball-player.service';

@Module({
  imports: [DataModule],
  controllers: [FoosballPlayerController],
  providers: [FoosballPlayerService],
  exports: [FoosballPlayerService],
})
export class FoosballPlayerModule {}
