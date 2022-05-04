import { DataService } from '@gamify/data';
import { UsersService } from '@gamify/users';
import { Test } from '@nestjs/testing';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';

describe('ApplicationsController', () => {
  let controller: ApplicationsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApplicationsService, DataService, UsersService],
      controllers: [ApplicationsController],
    }).compile();

    controller = module.get(ApplicationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
