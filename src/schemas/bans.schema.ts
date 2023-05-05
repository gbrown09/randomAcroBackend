import * as mongoose from 'mongoose';

export const Ban = new mongoose.Schema({
  user: String,
  multiplier: Number,
  pocketBan: Boolean,
  oneTime: Boolean,
});
