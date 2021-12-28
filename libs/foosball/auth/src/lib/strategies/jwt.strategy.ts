import { JwtConfig } from '@foosball/core';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { JwtDto } from '../dto/jwt.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService, private readonly service: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<JwtConfig>('jwt').jwtSecret,
    });
  }

  async validate(payload: JwtDto) {
    const user = await this.service.validateUser(payload.userId);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
