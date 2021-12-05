import { DataModule } from '@foosball/data';
import { Module } from '@nestjs/common';
import { FoosballMatchController } from './foosball-match.controller';
import { FoosballMatchService } from './foosball-match.service';

@Module({
  imports: [DataModule],
  controllers: [FoosballMatchController],
  providers: [FoosballMatchService],
  exports: [FoosballMatchService],
})
export class FoosballMatchModule {}
