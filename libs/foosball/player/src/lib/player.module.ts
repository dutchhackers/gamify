import { DataModule } from '@foosball/data';
import { ProfileModule } from '@foosball/profile';
import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerResolver } from './resolvers/player.resolver';

@Module({
  imports: [DataModule, ProfileModule],
  providers: [PlayerResolver, PlayerService],
  exports: [PlayerService],
})
export class PlayerModule {}
