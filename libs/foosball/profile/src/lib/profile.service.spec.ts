import { DataService } from '@foosball/data';
import { Test } from '@nestjs/testing';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProfileService, DataService],
    }).compile();

    service = module.get(ProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
