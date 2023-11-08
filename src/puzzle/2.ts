// 2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.

import { Restaurant, type IRestaurant } from '../model/Restaurant';

async function puzzleII(): Promise<IRestaurant[]> {
  const restaurants = await Restaurant.find(
    {},
    {
      _id: 0,
      restaurant_id: 1,
      name: 1,
      borough: 1,
      cuisine: 1,
    }
  ).lean();
  return restaurants;
}

export { puzzleII };
