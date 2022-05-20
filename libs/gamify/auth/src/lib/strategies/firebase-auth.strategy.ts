import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
import * as firebase from 'firebase-admin';
import { AuthService } from '../auth.service';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  'firebase-auth',
) {

  private defaultApp: firebase.app.App;

  constructor(
    private readonly authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
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

  private async createOrUpdateUser(firebaseUser: any) {
    let user = await this.authService.findByFirebaseId(firebaseUser.uid);

    if (user) {
      return user;
    }

    if (firebaseUser.email) {
      user = await this.authService.findByEmail(firebaseUser.email);
      if (user) {
        // the email already exists in the database, add the relevant firebase uid.
        user = await this.authService.updateFirebaseUid(user.id, firebaseUser.uid);
        return user;
      }
    }
    
    // Create new user
    user = await this.authService.create(firebaseUser.email, firebaseUser.uid);

    return user;
  }
}
