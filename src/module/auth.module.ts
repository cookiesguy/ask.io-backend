import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/authentication/jwt.strategy';
import { jwtKey } from 'src/authentication/key';
import { LocalStrategy } from 'src/authentication/local.strategy';
import { AuthService } from 'src/services/auth.service';
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
  exports: [AuthService],
})
export class AuthModule {}
