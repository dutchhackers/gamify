import { Test } from '@nestjs/testing';
import { FoosballPlayerService } from './foosball-player.service';

describe('FoosballPlayerService', () => {
  let service: FoosballPlayerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FoosballPlayerService],
    }).compile();

    service = module.get(FoosballPlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
