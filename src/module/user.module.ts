import { Module } from '@nestjs/common';
import { UsersModel } from '../models/user.model';

@Module({
  providers: [UsersModel],
  exports: [UsersModel],
})
export class UsersModule {}
