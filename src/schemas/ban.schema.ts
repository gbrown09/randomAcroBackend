import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BanDocument = Ban & Document;

@Schema()
export class Ban {
  @Prop()
  user: string;

  @Prop()
  multiplier: number;

  @Prop()
  pocketBan: boolean;

  @Prop()
  oneTime: boolean;
}

export const BanSchema = SchemaFactory.createForClass(Ban);
