import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeatureRequest } from 'src/interfaces/featureRequest.interface';
import { CreateFeatureRequestDto } from './dto/create-feature-request.dto';

@Injectable()
export class FeatureRequestService {
  constructor(@InjectModel('FeatureRequest') private readonly featureRequestModel: Model<FeatureRequest>) {}

  async create(createFeatureRequestDto: CreateFeatureRequestDto) {
    const newFeature = new this.featureRequestModel(createFeatureRequestDto);
    return await newFeature.save();
  }

  async findAll(): Promise<FeatureRequest[]> {
    const requests = await this.featureRequestModel.find().exec();
    return requests;
  }

  findOne(id: number) {
    return `This action returns a #${id} featureRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} featureRequest`;
  }

  async update(requested: string) {
    const update = await this.featureRequestModel.findOneAndUpdate({ request: requested.toString() }, { $set: { done: true } }, { useFindAndModify: false });
    return await update.save();
  }
}
