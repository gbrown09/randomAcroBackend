import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException, Query, UseFilters } from '@nestjs/common';
import { MongoExceptionFilter } from '../mongo-exceptions.filter';
import { BdayService } from './bday.service';
import { CreateBdayDto } from './dto/create-bday.dto';

@Controller('bday')
export class BdayController {
  constructor(private readonly bdayService: BdayService) {}

  @Post('/create')
  @UseFilters(MongoExceptionFilter)
  async create(@Res() res, @Body() createBdayDto: CreateBdayDto) {
    const bday = await this.bdayService.create(createBdayDto);
    return res.status(HttpStatus.OK).json({
      message: 'bday has been created successfully',
      bday,
    });
  }

  @Get('bdays')
  async findAll(@Res() res) {
    const bdays = await this.bdayService.findAll();
    return res.status(HttpStatus.OK).json(bdays);
  }

  @Get('bday/:id')
  async findOne(@Res() res, @Param('id') id: string) {
    const bday = await this.bdayService.findOne(id);
    if (!bday) throw new NotFoundException('bday does not exist!');
    return res.status(HttpStatus.OK).json(bday);
  }

  @Patch('/update')
  async updateCustomer(@Res() res, @Query('id') id, @Body() createBdayDto: CreateBdayDto) {
    const bday = await this.bdayService.update(id, createBdayDto);
    if (!bday) throw new NotFoundException('bday does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'bday has been successfully updated',
      bday,
    });
  }

  @Delete('/delete')
  async deleteCustomer(@Res() res, @Query('id') id) {
    const bday = await this.bdayService.remove(id);
    if (!bday) throw new NotFoundException('bday does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'bday has been deleted',
      bday,
    });
  }
}
