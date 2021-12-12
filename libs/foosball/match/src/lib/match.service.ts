import { TeamSide } from '@foosball/core';
import { DataService, MatchWhereUniqueInput, MatchCreateArgs } from '@foosball/data';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatchInput } from './dto/create-match.input';

@Injectable()
export class MatchService {
  private readonly matchIncludes = {
    players: true,
    events: true,
  };

  constructor(private readonly data: DataService) {}

  public findMany() {
    return this.data.match.findMany({ include: this.matchIncludes });
  }

  public async findOne(matchWhereUniqueInput: MatchWhereUniqueInput) {
    const found = await this.data.match.findUnique({
      where: matchWhereUniqueInput,
      include: this.matchIncludes,
    });

    if (!found) {
      throw new NotFoundException('Match not found');
    }
    return found;
  }

  public async create(createMatchInput: CreateMatchInput) {
    const payload: MatchCreateArgs = {
      data: {
        homeScore: createMatchInput.awayScore,
        awayScore: createMatchInput.homeScore,
        players: {
          create: [
            {
              playerId: createMatchInput.homePlayer1,
              side: TeamSide.HOME,
            },
            createMatchInput.homePlayer2 && {
              playerId: createMatchInput.homePlayer2,
              side: TeamSide.HOME,
            },
            {
              playerId: createMatchInput.awayPlayer1,
              side: TeamSide.AWAY,
            },
            createMatchInput.awayPlayer2 && {
              playerId: createMatchInput.awayPlayer2,
              side: TeamSide.AWAY,
            },
          ],
        },
      },
    };

    return this.data.match.create(payload);
  }
}
