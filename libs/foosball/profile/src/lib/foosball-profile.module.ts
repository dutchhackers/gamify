import { DataModule } from '@foosball/data';
import { Module } from '@nestjs/common';
import { FoosballProfileService } from './foosball-profile.service';
import { ProfileResolver } from './resolvers/profile.resolver';

@Module({
  imports: [DataModule],
  providers: [ProfileResolver, FoosballProfileService],
  exports: [FoosballProfileService],
})
export class FoosballProfileModule {}
