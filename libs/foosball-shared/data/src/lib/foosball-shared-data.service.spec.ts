import { Test } from '@nestjs/testing';
import { FoosballSharedDataService } from './foosball-shared-data.service';

describe('FoosballSharedDataService', () => {
  let service: FoosballSharedDataService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FoosballSharedDataService],
    }).compile();

    service = module.get(FoosballSharedDataService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
