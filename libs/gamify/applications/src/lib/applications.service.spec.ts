import { Test } from '@nestjs/testing';
import { ApplicationsService } from './applications.service';

describe('ApplicationsService', () => {
  let service: ApplicationsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApplicationsService],
    }).compile();

    service = module.get(ApplicationsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
