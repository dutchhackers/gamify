import { ApplicationsService, BadgesService, DataService, UsersService } from '@gamify/data';
import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UsersService, DataService, BadgesService, ApplicationsService],
      controllers: [UsersController],
    }).compile();

    controller = module.get(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
