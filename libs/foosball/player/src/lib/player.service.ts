import { DataService, PlayerWhereUniqueInput } from '@foosball/data';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerInput } from './dto/create-player.input';

@Injectable()
export class PlayerService {
  private readonly playerIncludes = {
    profile: true,
  };

  constructor(private readonly data: DataService) {}

  public findMany() {
    return this.data.player.findMany({ include: this.playerIncludes });
  }

  findOne(playerWhereUniqueInput: PlayerWhereUniqueInput) {
    return this.data.player.findUnique({
      where: playerWhereUniqueInput,
    });
  }

  public create(createPlayerInput: CreatePlayerInput) {
    return this.data.player.create({ data: createPlayerInput });
  }

  public remove(id: number) {
    return this.data.player.delete({ where: { id } });
  }
}
