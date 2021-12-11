import { DataService } from '@foosball/data';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerInput } from './dto/create-player.input';

@Injectable()
export class FoosballPlayerService {
  private readonly playerIncludes = {
    profile: true,
  };

  constructor(private readonly data: DataService) {}

  public findMany() {
    return this.data.player.findMany({ include: this.playerIncludes });
  }

  public findOne(id: number) {
    return this.data.player.findUnique({
      where: { id: id },
    });
  }

  public create(createPlayerInput: CreatePlayerInput) {
    return this.data.player.create({ data: createPlayerInput });
  }

  public remove(id: number) {
    return this.data.player.delete({ where: { id } });
  }
}
