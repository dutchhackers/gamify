import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreatePlayerInput {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  nickname?: string | null;

  @Field(() => String, { nullable: true })
  avatar?: string | null;
}
