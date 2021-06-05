import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bday } from 'src/interfaces/bday.interface';
import { CreateBdayDto } from './dto/create-bday.dto';

@Injectable()
export class BdayService {
  constructor(@InjectModel('Bday') private readonly bdayModel: Model<Bday>) {}

  async create(createBdayDto: CreateBdayDto): Promise<Bday> {
    /* const exists = await this.check(createBdayDto.userId);
    const newBday = await this.bdayModel.findOneAndUpdate({ userId: createBdayDto.userId }, { $setOnInsert: createBdayDto }, { upsert: true, new: true, useFindAndModify: false });
    return [newBday, exists]; */
    const newBday = new this.bdayModel(createBdayDto);
    return await newBday.save();
  }

  async findAll(): Promise<Bday[]> {
    const bdays = await this.bdayModel.find().exec();
    return bdays;
  }

  async findOne(id: string): Promise<Bday> {
    const bday = await this.bdayModel.findOne({ userId: id });
    return bday;
  }

  async update(id: string, createBdayDto: CreateBdayDto): Promise<Bday> {
    const updatedBday = await this.bdayModel.findByIdAndUpdate(id, createBdayDto, { new: true });
    return updatedBday;
  }

  async remove(id: string): Promise<Bday> {
    const deletedBday = await this.bdayModel.findOneAndDelete({ userId: id });
    return deletedBday;
  }

  async check(id: string): Promise<boolean> {
    return this.bdayModel.exists({ userId: id });
  }
}
