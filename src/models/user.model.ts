import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'interface/user.interface';
import { userModel } from 'constants/db';

@Injectable()
export class UsersModel {
  constructor(
    @Inject(userModel)
    private userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(email: string): Promise<User> {
    console.log(this.userModel.db.name);
    return this.userModel.findOne({ email: email }).exec();
  }
}
