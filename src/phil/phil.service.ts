import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Phil } from 'src/interfaces/phil.interface';
import { CreatePhilDto } from './dto/create-phil.dto';

@Injectable()
export class PhilService {
  constructor(@InjectModel('Phil') private readonly philModel: Model<Phil>) {}

  async create(createPhilDto: CreatePhilDto): Promise<Phil> {
    const newPhil = new this.philModel(createPhilDto);
    return await newPhil.save();
  }

  async findAll(): Promise<Phil[]> {
    const phils = await this.philModel.find().exec();
    return phils;
  }
}
