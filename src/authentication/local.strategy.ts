import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'services/auth.service';
import { stringify } from 'querystring';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'userInfo',
    });
  }

  async validate(email: string, userInfo: string): Promise<any> {
    const user = await this.authService.validateUser(email, userInfo);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
