import { ApplicationsService } from '@gamify/application';
import { DataService } from '@gamify/data';
import { UsersService } from '@gamify/users';
import { Test } from '@nestjs/testing';
import { BadgesController } from './badges.controller';
import { BadgesService } from './badges.service';

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
