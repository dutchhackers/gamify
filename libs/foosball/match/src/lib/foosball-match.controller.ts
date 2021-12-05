import { Controller } from '@nestjs/common';
import { FoosballMatchService } from './foosball-match.service';

@Controller('foosball-match')
export class FoosballMatchController {
  constructor(private foosballMatchService: FoosballMatchService) {}
}
