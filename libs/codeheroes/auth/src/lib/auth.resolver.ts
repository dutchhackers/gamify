import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CodeheroesAuthService as AuthService } from './codeheroes-auth.service';
import { CtxUser } from './decorators/ctx-user.decorator';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { User } from './models/user';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'me' })
  me(@CtxUser() user: User) {
    return user;
  }

}
