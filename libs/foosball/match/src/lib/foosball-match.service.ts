import { DataService } from '@foosball/data'
import { Injectable, NotFoundException } from '@nestjs/common'

@Injectable()
export class FoosballMatchService {
  private readonly matchIncludes = {
    players: true,
  }

  constructor(private readonly data: DataService) {}

  public matches() {
    return this.data.match.findMany({ include: this.matchIncludes })
  }
}
