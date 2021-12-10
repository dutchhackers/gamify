import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Profile } from './profile.model';

@ObjectType()
export class Player {
  @Field(() => Int)
  id: number;

  @Field((type) => String)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  nickname?: string | null;

  @Field(() => String, { nullable: true })
  avatar?: string | null;

  @Field(() => Profile, { nullable: true })
  profile?: Profile;
}
