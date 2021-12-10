import { Test } from '@nestjs/testing';
import { FoosballProfileService } from './foosball-profile.service';

describe('FoosballProfileService', () => {
  let service: FoosballProfileService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FoosballProfileService],
    }).compile();

    service = module.get(FoosballProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
