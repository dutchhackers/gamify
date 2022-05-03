import { DataService } from '@gamify/data';
import { Test } from '@nestjs/testing';
import { ApplicationsService } from './applications.service';
import { UsersService } from './users.service';

describe('ApplicationsService', () => {
  let service: ApplicationsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApplicationsService, DataService, UsersService],
    }).compile();

    service = module.get(ApplicationsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
