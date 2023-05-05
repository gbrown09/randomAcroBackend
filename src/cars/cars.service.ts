import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from 'src/interfaces/car.interface';
import { CarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Cars') private readonly carModel: Model<Car>) {}

  async create(createCarDto: CarDto): Promise<Car> {
    const newCar = new this.carModel(createCarDto);
    return await newCar.save();
  }

  async findAll(): Promise<Car[]> {
    const cars = await this.carModel.find().collation({ locale: 'en' }).sort({ owner: 1, year: 1, make: 1, model: 1 }).exec();
    return cars;
  }

  async find(id: string): Promise<Car[]> {
    const car = await this.carModel.find({ owner: id });
    return car;
  }

  async update(id: string, updateCarDto: UpdateCarDto): Promise<Car> {
    const updatedCar = await this.carModel.findByIdAndUpdate(id, updateCarDto, { new: true });
    return updatedCar;
  }

  async remove(carDto: CarDto): Promise<Car> {
    const deleteCar = await this.carModel.findOneAndDelete({
      owner: carDto.owner,
      year: carDto.year,
      model: carDto.model,
      make: carDto.make,
    });
    return deleteCar;
  }

  async check(carDto: CarDto): Promise<boolean> {
    return this.carModel.exists({
      owner: carDto.owner,
      year: carDto.year,
      model: carDto.model,
      make: carDto.make,
    });
  }
}
