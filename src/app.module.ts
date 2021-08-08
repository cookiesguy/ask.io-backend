import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from 'controllers/auth.controller';
import { AuthModule } from 'modules/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, ConfigModule.forRoot()],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
