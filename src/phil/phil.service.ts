import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePhilDto } from './dto/create-phil.dto';
import { Phil, PhilDocument } from 'src/schemas/phil.schema';

@Injectable()
export class PhilService {
  constructor(@InjectModel(Phil.name) private readonly philModel: Model<PhilDocument>) {}

  async create(createPhilDto: CreatePhilDto): Promise<PhilDocument> {
    const newPhil = new this.philModel(createPhilDto);
    return await newPhil.save();
  }

  async findAll(): Promise<PhilDocument[]> {
    const phils = await this.philModel.find().exec();
    return phils;
  }
}
