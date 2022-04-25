import { DataService } from '@gamify/data';
import { UsersService } from '@gamify/users';
import { Test } from '@nestjs/testing';
import { BadgesService } from './badges.service';

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
