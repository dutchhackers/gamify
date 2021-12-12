import { Player } from '@foosball/player';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MatchEvent {
  @Field(() => Int)
  id: number;

  matchPlayerId: number;

  @Field()
  type: string; // to be refactored into enum

  @Field()
  player: Player; // to be refactored into enum

  @Field(() => Int)
  order: number;

  @Field()
  createdAt: Date;
}
