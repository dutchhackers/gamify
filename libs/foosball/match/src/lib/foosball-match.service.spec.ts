import { DataService } from '@foosball/data';
import { Test } from '@nestjs/testing';
import { FoosballMatchService } from './foosball-match.service';

describe('FoosballMatchService', () => {
  let service: FoosballMatchService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FoosballMatchService, DataService],
    }).compile();

    service = module.get(FoosballMatchService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
