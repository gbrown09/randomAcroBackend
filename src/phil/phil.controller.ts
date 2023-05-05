import { Controller, Get, Post, Body, UseFilters, Res, HttpStatus } from '@nestjs/common';
import { PhilService } from './phil.service';
import { CreatePhilDto } from './dto/create-phil.dto';
import { MongoExceptionFilter } from 'src/mongo-exceptions.filter';

@Controller('phil')
export class PhilController {
  constructor(private readonly philService: PhilService) {}

  @Post('/create')
  @UseFilters(MongoExceptionFilter)
  async create(@Res() res, @Body() createPhilDto: CreatePhilDto) {
    const addPhil = await this.philService.create(createPhilDto);
    return res.status(HttpStatus.OK).json({
      message: 'Added to the list',
      addPhil,
    });
  }

  @Get('/phils')
  async findAll(@Res() res) {
    const phils = await this.philService.findAll();
    return res.status(HttpStatus.OK).json(phils);
  }
}
