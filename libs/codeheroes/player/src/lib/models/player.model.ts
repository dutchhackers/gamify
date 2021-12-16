import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ObjectType()
export class Player {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field(() => String, { nullable: true })
  nickname?: string | null;

  @Field(() => String, { nullable: true })
  avatar?: string | null;

}
