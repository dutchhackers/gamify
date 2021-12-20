import { DataModule } from '@codeheroes/data';
import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerResolver } from './resolvers/player.resolver';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [PlayerResolver, PlayerService],
  exports: [PlayerService],
})
export class PlayerModule {}
