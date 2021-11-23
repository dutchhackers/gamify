import { Module } from '@nestjs/common';
import { FoosballSharedDataService } from './foosball-shared-data.service';

@Module({
  controllers: [],
  providers: [FoosballSharedDataService],
  exports: [FoosballSharedDataService],
})
export class FoosballSharedDataModule {}
