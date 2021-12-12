import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CtxUser } from './decorators/ctx-user.decorator';
import { AuthLoginInput } from './dto/auth-login.input';
import { AuthRegisterInput } from './dto/auth-register.input';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { User } from './models/user';
import { UserToken } from './models/user-token';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'me' })
  me(@CtxUser() user: User) {
    return user;
  }

  @Mutation(() => UserToken)
  login(@Args({ name: 'input', type: () => AuthLoginInput }) input: AuthLoginInput) {
    return this.authService.login(input);
  }

  @Mutation(() => UserToken)
  register(@Args({ name: 'input', type: () => AuthRegisterInput }) input: AuthRegisterInput) {
    return this.authService.register(input);
  }
}
