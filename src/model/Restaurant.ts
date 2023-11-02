import mongoose, { type Document } from 'mongoose';

interface IRestaurant extends Document {
  address: {
    building: string;
    coord: [number];
    street: string;
    zipcode: string;
  };
  borough: string;
  cuisine: string;
  grades: {
    date: { $date: number } | Date;
    grade: string;
    score: number;
  }[];
  name: string;
  restaurant_id: string;
}

const restaurantSchema = new mongoose.Schema<IRestaurant>({
  address: {
    building: String,
    coord: [Number],
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: {
        type: Date,
      },
      grade: String,
      score: Number,
    },
  ],
  name: String,
  restaurant_id: String,
});

const Restaurant = mongoose.model<IRestaurant>('Restaurant', restaurantSchema);

export { Restaurant, IRestaurant };
