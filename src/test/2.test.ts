import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { connect, disconnect } from '../index';
import { puzzleII } from '../puzzle/2';

describe('Puzzle 2', () => {
  beforeAll(async () => {
    await connect();
  });

  test('The query returned a least one restaurant', async () => {
    return puzzleII().then((restaurantCollection) => {
      expect(restaurantCollection).not.toBeNull();
    });
  });

  test('The query returned only the requested properties for each restaurant', async () => {
    return puzzleII().then((restaurantCollection) => {
      const randomRestaurant =
        restaurantCollection[
          Math.floor(Math.random() * restaurantCollection.length)
        ];

      const expectedProperties = [
        'restaurant_id',
        'name',
        'borough',
        'cuisine',
      ];
      const unexpectedProperties = ['_id', 'address', 'grades'];

      expectedProperties.forEach((property) => {
        expect(randomRestaurant).toHaveProperty(property);
      });

      unexpectedProperties.forEach((property) => {
        expect(randomRestaurant).not.toHaveProperty(property);
      });
    });
  });

  test('The query retrieved 3772 restaurants', async () => {
    const restaurantCollection = await puzzleII();
    expect(restaurantCollection).toHaveLength(3772);
  });

  afterAll((done) => {
    disconnect().then(() => {
      done();
    });
  });
});
