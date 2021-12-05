import { Test } from '@nestjs/testing';
import { FoosballMatchController } from './foosball-match.controller';
import { FoosballMatchService } from './foosball-match.service';

describe('FoosballMatchController', () => {
  let controller: FoosballMatchController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FoosballMatchService],
      controllers: [FoosballMatchController],
    }).compile();

    controller = module.get(FoosballMatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
