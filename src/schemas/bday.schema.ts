import * as mongoose from 'mongoose';

export const BdaySchema = new mongoose.Schema({
  userId: String,
  date: String,
});
