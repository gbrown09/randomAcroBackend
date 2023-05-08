import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFeatureRequestDto } from './dto/create-feature-request.dto';
import { FeatureRequest, FeatureRequestDocument } from 'src/schemas/featureRequest.schema';

@Injectable()
export class FeatureRequestService {
  constructor(@InjectModel(FeatureRequest.name) private readonly featureRequestModel: Model<FeatureRequestDocument>) {}

  async create(createFeatureRequestDto: CreateFeatureRequestDto): Promise<FeatureRequestDocument> {
    const newFeature = new this.featureRequestModel(createFeatureRequestDto);
    return await newFeature.save();
  }

  async findAll(): Promise<FeatureRequestDocument[]> {
    const requests = await this.featureRequestModel.find().exec();
    return requests;
  }

  async update(requested: string): Promise<FeatureRequestDocument> {
    const update = await this.featureRequestModel.findOneAndUpdate({ request: requested.toString() }, { $set: { done: true } }, { useFindAndModify: false });
    return await update.save();
  }
}
