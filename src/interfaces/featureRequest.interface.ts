import { Document } from 'mongoose';

export interface FeatureRequestOld extends Document {
  userId: string;
  request: string;
  userName: string;
  done: boolean;
}
