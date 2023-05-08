import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FeatureRequestDocument = FeatureRequest & Document;

@Schema()
export class FeatureRequest {
  @Prop()
  userId: string;

  @Prop()
  request: string;

  @Prop()
  userName: string;

  @Prop()
  done: string;
}

export const FeatureRequestSchema = SchemaFactory.createForClass(FeatureRequest);
