import { Controller, Get, Post, Body, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { FeatureRequestService } from './feature-request.service';
import { CreateFeatureRequestDto } from './dto/create-feature-request.dto';

@Controller('feature-request')
export class FeatureRequestController {
  constructor(private readonly featureRequestService: FeatureRequestService) {}

  @Post('/create')
  async create(@Res() res, @Body() createFeatureRequestDto: CreateFeatureRequestDto) {
    const feat = await this.featureRequestService.create(createFeatureRequestDto);
    return res.status(HttpStatus.OK).json({
      message: 'Feature Request has been created successfully',
      feat,
    });
  }

  @Get('/all')
  async findAll(@Res() res) {
    const feats = await this.featureRequestService.findAll();
    return res.status(HttpStatus.OK).json(feats);
  }

  @Post('/update')
  async update(@Res() res, @Body() data) {
    const update = await this.featureRequestService.update(data.request);
    return res.status(HttpStatus.OK).json({
      message: 'Feature has been marked as done',
      update,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.featureRequestService.remove(+id);
  }
}
