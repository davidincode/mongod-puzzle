import mongoose from 'mongoose';
import { MONGODB_CONNECTION_STRING } from './config';
import { insertInitialData } from './helper/script';

import { Restaurant } from './model/Restaurant';
import { puzzleI } from './puzzle/1';

connect().catch((error: unknown) => console.error(error));

async function connect() {
  await mongoose.connect(MONGODB_CONNECTION_STRING as string);
  console.info('Connected to MongoDB');
  if ((await Restaurant.countDocuments()) === 0) {
    await insertInitialData()
      .then(() => {
        console.info('Initial data inserted successfully');
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }
  console.info('All ready to go!');
  puzzleI();
}
