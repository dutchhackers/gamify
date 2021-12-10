import { DataService } from '@foosball/data'
import { Injectable, NotFoundException } from '@nestjs/common'

@Injectable()
export class FoosballPlayerService {
  private readonly playerIncludes = {
    profile: true,
  }

  constructor(private readonly data: DataService) {}

  public findMany() {
    return this.data.player.findMany({ include: this.playerIncludes })
  }

  public findOne(id: number) {
    return this.data.player.findUnique({
      where: { id: id },
    });
  }

  public findOneProfile(playerId: number) {
    return this.data.profile.findUnique({
      where: { playerId: playerId },
    });
  }

}
