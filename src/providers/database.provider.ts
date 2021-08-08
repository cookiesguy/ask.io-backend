import * as mongoose from 'mongoose';
import { connection } from 'constants/db';

export const databaseProviders = [
  {
    provide: connection,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(`${process.env.MONGO_URI}`),
  },
];
