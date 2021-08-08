import { Module } from '@nestjs/common';
import { UsersModel } from 'models/user.model';
import { userProviders } from 'providers/user.provider';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UsersModel, ...userProviders],
  exports: [UsersModel],
})
export class UsersModule {}
