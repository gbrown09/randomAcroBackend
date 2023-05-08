import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhilDocument = Phil & Document;

@Schema()
export class Phil {
  @Prop()
  philText: string;
}

export const PhilSchema = SchemaFactory.createForClass(Phil);
