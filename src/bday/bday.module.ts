import { Module } from '@nestjs/common';
import { BdayService } from './bday.service';
import { BdayController } from './bday.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BdaySchema } from '../schemas/bday.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Bday', schema: BdaySchema }], 'bdays')],
  controllers: [BdayController],
  providers: [BdayService],
})
export class BdayModule {}
