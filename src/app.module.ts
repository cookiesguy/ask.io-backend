import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth.controller';
import { AuthModule } from './module/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
