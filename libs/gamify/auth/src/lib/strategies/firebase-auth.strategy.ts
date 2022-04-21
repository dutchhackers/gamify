import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
import * as firebase from 'firebase-admin';
import { UsersService } from '@gamify/users';
import { UserModel } from '../models/user.model';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  'firebase-auth',
) {

  private defaultApp: firebase.app.App;

  constructor(
    private readonly usersService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
    console.log('strategy constructor');
    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.applicationDefault()
    });
  }

  async validate(token: string) {
    const firebaseUser: firebase.auth.DecodedIdToken = await this.defaultApp
      .auth()
      .verifyIdToken(token, true)
      .catch((err) => {
        console.log(err);
        throw new UnauthorizedException(err.message);
      });
    
    if (!firebaseUser) {
      throw new UnauthorizedException();
    }
    
    const user = await this.createOrUpdateUser(firebaseUser);

    return {
      ...user,
      firebaseData: firebaseUser
    };
  }

  private async createOrUpdateUser(firebaseUser) {
    let user = await this.usersService.findByFirebaseId(firebaseUser.uid);

    if (user) {
      return user;
    }


    if (firebaseUser.email) {
      user = await this.usersService.findByEmail(firebaseUser.email);
      if (user) {
        // the email already exists in the database, add the relevant firebase uid.
        user = await this.usersService.updateFirebaseUid(user.id, firebaseUser.uid);
        return user;
      }
    }
    
    // Create new user
    user = await this.usersService.create(firebaseUser.email, firebaseUser.uid);

    return user;
  }
}
