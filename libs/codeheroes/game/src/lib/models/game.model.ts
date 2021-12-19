import 'reflect-metadata';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Game {
  @Field(() => String)
  id: string;

  @Field(() => String)
  createdAt: Date;

}
