import { DataModule } from '@foosball/data';
import { Module } from '@nestjs/common';
import { FoosballMatchService } from './foosball-match.service';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [FoosballMatchService],
  exports: [FoosballMatchService],
})
export class FoosballMatchModule {}
