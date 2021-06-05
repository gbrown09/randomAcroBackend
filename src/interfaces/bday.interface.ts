import { Document } from 'mongoose';

export interface Bday extends Document {
  userId: string;
  date: string;
}
