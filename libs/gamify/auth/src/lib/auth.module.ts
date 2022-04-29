import { UsersModule } from '@gamify/users';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FirebaseAuthStrategy } from './strategies/firebase-auth.strategy';

@Module({
  controllers: [],
  imports: [PassportModule, UsersModule],
  providers: [FirebaseAuthStrategy],
  exports: [],
})
export class AuthModule {}
