import { Document } from 'mongoose';

export interface BdayOld extends Document {
  userId: string;
  date: string;
}
