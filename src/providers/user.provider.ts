import { Connection } from 'mongoose';
import { UserSchema } from 'schemas/user.schema';
import { userModel, connection } from 'constants/db';

export const userProviders = [
  {
    provide: userModel,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema, 'users'),
    inject: [connection],
  },
];
