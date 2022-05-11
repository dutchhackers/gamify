import { DataService, ApplicationsService, UsersService, BadgesService } from '@gamify/data';
import { Test } from '@nestjs/testing';
import { BadgesController } from './badges.controller';

describe('BadgesController', () => {
  let controller: BadgesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BadgesService, ApplicationsService, DataService, UsersService],
      controllers: [BadgesController],
    }).compile();

    controller = module.get(BadgesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
