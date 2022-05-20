import { DataService } from '@gamify/data';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, DataService],
    }).compile();
  });

  it('should be defined', () => {
    expect(app).toBeTruthy();
  });
});
