import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'authentication/jwt.strategy';
import { jwtKey } from 'authentication/key';
import { LocalStrategy } from 'authentication/local.strategy';
import { AuthService } from 'services/auth.service';
import { UsersModule } from './user.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtKey.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService, UsersModule],
})
export class AuthModule {}
