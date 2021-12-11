import { InputType, Int, Field } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateMatchInput {
  @Field(() => Int)
  homePlayer1: number;

  @Field(() => Int, { nullable: true })
  homePlayer2: number;

  @Field(() => Int)
  @Min(0)
  homeScore: number;

  @Field(() => Int)
  awayPlayer1: number;

  @Field(() => Int, { nullable: true })
  awayPlayer2: number;

  @Field(() => Int)
  @Min(0)
  awayScore: number;
}
