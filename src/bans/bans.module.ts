import { Module } from '@nestjs/common';
import { BansService } from './bans.service';
import { BansController } from './bans.controller';
import { Ban, BanSchema } from '../schemas/ban.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ban.name, schema: BanSchema, collection: 'bans' }])],
  controllers: [BansController],
  providers: [BansService],
})
export class BansModule {}
