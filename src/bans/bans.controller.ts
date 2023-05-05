import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { BansService } from './bans.service';
import { CreateBanDto } from './dto/create-ban.dto';
import { UpdateBanDto } from './dto/update-ban.dto';

@Controller('bans')
export class BansController {
  constructor(private readonly bansService: BansService) {}

  @Post()
  create(@Res() res, @Body() createBanDto: CreateBanDto) {
    const add = this.bansService.create(createBanDto);
    return res.status(HttpStatus.OK).json({
      message: 'added to the list',
      add,
    });
  }

  @Get()
  findAll() {
    return this.bansService.findAll();
  }

  @Get('banner')
  findAllB() {
    return this.bansService.findBanner();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bansService.findOne(id);
  }

  @Patch(':id')
  async update(@Res() res: Response, @Param('id') id: string, @Body() updateBanDto: UpdateBanDto) {
    const update = await this.bansService.updateOne(id, updateBanDto);
    return res.status(HttpStatus.OK).json({
      message: 'Updated',
      update,
    });
  }

  @Patch()
  updateAll() {
    return this.bansService.updateMany();
  }
}
