import { Player } from '@foosball/player';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MatchEvent } from './match-event.model';

@ObjectType()
export class Match {
  @Field(() => Int)
  id: number;

  @Field()
  date: Date;

  @Field(() => String)
  status: string;

  @Field(() => Int)
  homeScore: number;

  @Field(() => Int)
  awayScore: number;

  @Field(() => [Player], { nullable: true })
  players?: Player;

  @Field(() => [MatchEvent], { nullable: true })
  events?: MatchEvent;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
