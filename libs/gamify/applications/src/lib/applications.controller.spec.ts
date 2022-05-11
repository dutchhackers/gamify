import { DataService, ApplicationsService, UsersService } from '@gamify/data';
import { Test } from '@nestjs/testing';
import { ApplicationsController } from './applications.controller';

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
