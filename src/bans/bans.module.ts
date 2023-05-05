import { Module } from '@nestjs/common';
import { BansService } from './bans.service';
import { BansController } from './bans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ban } from 'src/schemas/bans.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Bans', schema: Ban, collection: 'bans' }], 'acro')],
  controllers: [BansController],
  providers: [BansService],
})
export class BansModule {}
