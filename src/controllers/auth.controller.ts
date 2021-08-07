import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { JwtAuthGuard, LocalAuthGuard } from 'src/guard/auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}