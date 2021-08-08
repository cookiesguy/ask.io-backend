import { Body, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersModel } from 'models/user.model';

@Injectable()
export class AuthService {
  constructor(private usersModal: UsersModel, private jwtService: JwtService) {}

  async validateUser(email: string, userInfo: string): Promise<any> {
    const user = await this.usersModal.findOne(email, userInfo);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
      userInfo: user,
    };
  }
}
