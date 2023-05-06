import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBdayDto } from './dto/create-bday.dto';
import { Bday, BdayDocument } from 'src/schemas/bday.schema';

@Injectable()
export class BdayService {
  constructor(@InjectModel(Bday.name) private readonly bdayModel: Model<BdayDocument>) {}

  async create(createBdayDto: CreateBdayDto): Promise<BdayDocument> {
    const newBday = new this.bdayModel(createBdayDto);
    return await newBday.save();
  }

  async findAll(): Promise<BdayDocument[]> {
    const bdays = await this.bdayModel.find().sort({ date: 1 }).exec();
    return bdays;
  }

  async findOne(id: string): Promise<BdayDocument> {
    const bday = await this.bdayModel.findOne({ userId: id });
    return bday;
  }

  async update(id: string, createBdayDto: CreateBdayDto): Promise<BdayDocument> {
    const updatedBday = await this.bdayModel.findByIdAndUpdate(id, createBdayDto, { new: true });
    return updatedBday;
  }

  async remove(id: string): Promise<BdayDocument> {
    const deletedBday = await this.bdayModel.findOneAndDelete({ userId: id });
    return deletedBday;
  }

  async check(id: string): Promise<any> {
    return this.bdayModel.exists({ userId: id });
  }
}
