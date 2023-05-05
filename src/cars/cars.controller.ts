import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseFilters, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { Response } from 'express';
import { MongoExceptionFilter } from 'src/mongo-exceptions.filter';
import { CarsService } from './cars.service';
import { CarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post('/create')
  @UseFilters(MongoExceptionFilter)
  async create(@Res() res, @Body() createCarDto: CarDto) {
    const addCar = await this.carsService.create(createCarDto);
    return res.status(HttpStatus.OK).json({
      message: 'Added to the car list',
      addCar,
    });
  }

  @Get('/all')
  async findAll(@Res() res: Response) {
    const cars = await this.carsService.findAll();
    return res.status(HttpStatus.OK).json(cars);
  }

  @Get('/find/:id')
  async findOne(@Res() res: Response, @Param('id') id: string) {
    const car = await this.carsService.find(id);
    if (car.length === 0) return res.status(HttpStatus.OK).json({ message: 'They have no cars' });
    return res.status(HttpStatus.OK).json(car);
  }

  @Get('/check')
  async check(@Res() res: Response, @Body() carDto: CarDto) {
    const car = await this.carsService.check(carDto);
    return res.status(HttpStatus.OK).json(car);
  }

  @Patch('/update')
  async update(@Res() res: Response, @Query('id') id, @Body() updateCarDto: CarDto) {
    const car = await this.carsService.update(id, updateCarDto);
    if (!car) throw new NotFoundException('Car does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'car has been updated',
      car,
    });
  }

  @Delete('/delete')
  remove(@Res() res: Response, @Body() carDto: CarDto) {
    const car = this.carsService.remove(carDto);
    if (!car) throw new NotFoundException('Car does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'car has been deleted',
      car,
    });
  }
}
