import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
import * as firebase from 'firebase-admin';
import { UsersService } from '@gamify/users';

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

    let user = await this.usersService.findByFirebaseId(firebaseUser.uid);
    if (!user) {
      console.log('user doesnt exists, create a new one');
      // User doesn't exist yet, make a new one
      user = await this.usersService.create(firebaseUser.email, firebaseUser.uid);
    }

    return {
      ...user,
      firebaseData: firebaseUser
    };
  }

}
