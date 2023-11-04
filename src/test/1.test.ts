import { describe, test, expect } from '@jest/globals';
import { puzzleI } from '../puzzle/1';

describe('Puzzle 1', async () => {
  test('The query returned a least one restaurant', async () => {
    return puzzleI().then((restaurantCollection) => {
      expect(restaurantCollection).not.toBeNull();
    });
  });

  // test('The first restaurant should be Morris Park Bake Shop', async () => {
  //   const restaurantCollection = await puzzleI();
  //   expect(restaurantCollection[0].name).toBe('Morris Park Bake Shop');
  // });

  // test('The query retrieved 3772 restaurants', async () => {
  //   const restaurantCollection = await puzzleI();
  //   expect(restaurantCollection).toHaveLength(3772);
  // });
});