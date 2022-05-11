import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FirebaseAuthStrategy } from './strategies/firebase-auth.strategy';
import { AuthService } from './auth.service';
import { DataModule } from '@gamify/data';

@Module({
  controllers: [],
  imports: [PassportModule, DataModule],
  providers: [FirebaseAuthStrategy, AuthService],
  exports: [],
})
export class AuthModule {}
