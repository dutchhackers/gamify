import { Test } from '@nestjs/testing';
import { CodeheroesAuthService } from './auth.service';

describe('CodeheroesAuthService', () => {
  let service: CodeheroesAuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CodeheroesAuthService],
    }).compile();

    service = module.get(CodeheroesAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
