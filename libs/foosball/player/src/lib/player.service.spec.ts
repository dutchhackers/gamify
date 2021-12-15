import { DataService } from '@foosball/data';
import { Test } from '@nestjs/testing';
import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PlayerService, DataService],
    }).compile();

    service = module.get(PlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
