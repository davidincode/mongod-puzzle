// 1. Write a MongoDB query to display all the documents in the collection 'restaurants'

import { Restaurant, type IRestaurant } from '../model/Restaurant';

async function puzzleI(): Promise<IRestaurant[]> {
  const restaurants = await Restaurant.find();
  return restaurants;
}

export { puzzleI };
