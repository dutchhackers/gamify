import { DataService } from '@foosball/data'
import { Injectable, NotFoundException } from '@nestjs/common'

@Injectable()
export class FoosballPlayerService {
  private readonly playerIncludes = {
    profile: true,
  }

  constructor(private readonly data: DataService) {}

  public players() {
    return this.data.player.findMany({ include: this.playerIncludes })
  }
}
