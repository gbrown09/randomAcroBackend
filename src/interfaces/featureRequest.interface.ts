import { Document } from 'mongoose';

export interface FeatureRequest extends Document {
  userId: string;
  request: string;
  userName: string;
  done: boolean;
}
