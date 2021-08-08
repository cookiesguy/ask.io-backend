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

  async addUser(email: string, name: string, imageUrl: string): Promise<User> {
    const user = await this.userModel.create({
      email: email,
      name: name,
      imageUrl: imageUrl,
    });
    return user;
  }

  async findOne(email: string, userInfo: string): Promise<User> {
    const strings = userInfo.split(',');
    const name = strings[0];
    const imageUrl = strings[1];
    const user = await this.userModel.findOne({ email: email }).exec();
    if (user) {
      return user;
    } else {
      const newUser = await this.addUser(email, name, imageUrl);
      return newUser;
    }
  }
}
