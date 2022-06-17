import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BadgesService } from './badges.service';

describe('BadgesService', () => {
  let service: BadgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(BadgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
