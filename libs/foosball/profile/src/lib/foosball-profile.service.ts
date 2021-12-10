import { DataService } from '@foosball/data'
import { Injectable } from '@nestjs/common'

@Injectable()
export class FoosballProfileService {
  private readonly playerIncludes = {
    profile: true,
  }

  constructor(private readonly data: DataService) {}

  public findOne(playerId: number) {
    return this.data.profile.findUnique({
      where: { playerId: playerId },
    });
  }

}

