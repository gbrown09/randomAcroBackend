import { Module } from '@nestjs/common';
import { PhilService } from './phil.service';
import { PhilController } from './phil.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Phil } from 'src/schemas/phil.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Phil', schema: Phil, collection: 'phil' }], 'acro')],
  controllers: [PhilController],
  providers: [PhilService],
})
export class PhilModule {}
