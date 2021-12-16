import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { CodeheroesAuthService as AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { FirebaseAuthStrategy } from './strategies/firebase-auth.strategy';

@Module({
  controllers: [],
  providers: [AuthResolver, AuthService, FirebaseAuthStrategy, GqlAuthGuard],
  exports: [],
})
export class AuthModule {}
