import * as mongoose from 'mongoose';

export const Cars = new mongoose.Schema({
  owner: String,
  year: Number,
  make: String,
  model: String,
});
