import { Restaurant, type IRestaurant } from '../model/Restaurant';
import fs from 'fs';

const JSONRestaurantList: IRestaurant[] = JSON.parse(
  fs.readFileSync(__dirname + '/../data/data.json', 'utf8')
);

async function insertInitialData() {
  console.info('Inserting initial data. This may take a while...');
  // Convert "$date" value to Date Object
  JSONRestaurantList.forEach((restaurant) => {
    if (restaurant.grades) {
      restaurant.grades.forEach((grade) => {
        if (typeof grade.date === 'object' && '$date' in grade.date) {
          grade.date = new Date(grade.date['$date']);
        }
      });
    }
  });
  await Restaurant.insertMany(JSONRestaurantList);
}

export { insertInitialData };
