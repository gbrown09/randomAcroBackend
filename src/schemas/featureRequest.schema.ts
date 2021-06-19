import * as mongoose from 'mongoose';

export const FeatureRequest = new mongoose.Schema({
  userId: String,
  request: String,
  userName: String,
  done: Boolean,
});
