import { DataService } from './../data.service';
import { Test } from '@nestjs/testing';
import { BadgesService } from './badges.service';
import { UsersService } from './users.service';

describe('BadgesService', () => {
  let service: BadgesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BadgesService, DataService, UsersService],
    }).compile();

    service = module.get(BadgesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
