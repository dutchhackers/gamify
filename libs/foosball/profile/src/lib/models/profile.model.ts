import { Field, ObjectType } from '@nestjs/graphql';
// import 'reflect-metadata';

@ObjectType()
export class Profile {
  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  slackId?: string;

  @Field({ nullable: true })
  githubHandle?: string;

  @Field({ nullable: true })
  twitterHandle?: string;

  @Field({ nullable: true })
  instagramHandle?: string;
}
