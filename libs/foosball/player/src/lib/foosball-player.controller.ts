import { Controller } from '@nestjs/common';
import { FoosballPlayerService } from './foosball-player.service';

@Controller('foosball-player')
export class FoosballPlayerController {
  constructor(private foosballPlayerService: FoosballPlayerService) {}
}
