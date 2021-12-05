import { Test } from '@nestjs/testing';
import { FoosballPlayerController } from './foosball-player.controller';
import { FoosballPlayerService } from './foosball-player.service';

describe('FoosballPlayerController', () => {
  let controller: FoosballPlayerController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FoosballPlayerService],
      controllers: [FoosballPlayerController],
    }).compile();

    controller = module.get(FoosballPlayerController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
