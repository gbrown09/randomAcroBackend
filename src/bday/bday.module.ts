import { Module } from '@nestjs/common';
import { BdayService } from './bday.service';
import { BdayController } from './bday.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bday, BdaySchema } from '../schemas/bday.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bday.name, schema: BdaySchema, collection: 'bdays' }])],
  controllers: [BdayController],
  providers: [BdayService],
})
export class BdayModule {}
