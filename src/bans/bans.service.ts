import { Injectable } from '@nestjs/common';
import { CreateBanDto } from './dto/create-ban.dto';
import { UpdateBanDto } from './dto/update-ban.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ban } from 'src/interfaces/ban.interface';
import { Model } from 'mongoose';

@Injectable()
export class BansService {
  constructor(@InjectModel('Bans') private readonly banModel: Model<Ban>) {}

  async create(createBanDto: CreateBanDto): Promise<Ban> {
    const newBan = new this.banModel(createBanDto);
    return await newBan.save();
  }

  async findAll(): Promise<Ban[]> {
    const bans = await this.banModel.find().exec();
    return bans;
  }

  async findOne(id: string): Promise<Ban> {
    return await this.banModel.findOne({ user: id });
  }

  async findBanner(): Promise<Ban[]> {
    const banners = await this.banModel.find({
      $or: [{ pocketBan: true }, { oneTime: true }],
    });
    return banners;
  }

  async updateOne(id: string, updateBanDto: UpdateBanDto): Promise<Ban> {
    const update = await this.banModel.findOneAndUpdate({ user: id }, updateBanDto, { useFindAndModify: false, new: true });
    return update;
  }

  async updateMany(): Promise<string> {
    await this.banModel.db.collection('bans').updateMany({}, { $set: { multiplier: 0 } });
    return 'Updated';
  }

  remove(id: number) {
    return `This action removes a #${id} ban`;
  }
}
