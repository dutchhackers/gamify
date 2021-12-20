import { DataModule } from '@codeheroes/data';
import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './resolvers/game.resolver';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [GameService, GameResolver],
  exports: [GameService],
})
export class GameModule {}
