import { UserModel } from '@gamify/auth';
import { DataService, ApplicationsService, UsersService } from '@gamify/data';
import { Application, ApplicationType } from '@gamify/shared';
import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApplicationsController } from './applications.controller';

describe('ApplicationsController', () => {
  let controller: ApplicationsController;
  let user: UserModel;
  let unauthorizedUser: UserModel;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApplicationsService, DataService, UsersService],
      controllers: [ApplicationsController],
    }).compile();

    controller = module.get(ApplicationsController);
    user = new UserModel();
    user.id = 1;

    unauthorizedUser = new UserModel();
    unauthorizedUser.id = 2;
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  describe('findAll', () => {
    it('should return an array of applications', async () => {
      const result = await controller.findAll();
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Array);
    });
  })

  describe('findOne', () => {
    it('should return an application', async () => {
      const result = await controller.findOne(1);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Application);
    });

    it('should return NotFoundException if application does not exist', async () => {
      const expectedError = new NotFoundException("Not Found");
      
      await expect(controller.findOne(999)).rejects.toThrow(expectedError);
    });
  });

  describe('create', () => {
    it('should create an application', async () => {
      const result = await controller.create({
        name: 'Test Application',
        description: 'Test Application Description',
        applicationType: ApplicationType.GAME,
        externalApplicationUrl: "http://test.com",
        ownerUserId: 1
      }, user);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Application);
    });
  });

  describe('update', () => {
    it('should update an application', async () => {
      const result = await controller.update(1, {
        name: 'Test Application',
        description: 'Test Application Description',
        externalApplicationUrl: "http://test.com",
      }, user);
      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(Application);
    })
  });
});
