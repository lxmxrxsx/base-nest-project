import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PinguService } from './pingu.service';
import { CreatePinguDto } from './dto/create-pingu.dto';
import { UpdatePinguDto } from './dto/update-pingu.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('pingu')
export class PinguController {
  constructor(private readonly pinguService: PinguService) {}

  @Post()
  @ApiBody({ type: CreatePinguDto })
  async create(@Body() createPinguDto: CreatePinguDto) {
    return this.pinguService.create(createPinguDto);
  }

  @Get()
  findAll() {
    return this.pinguService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinguService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePinguDto: UpdatePinguDto) {
    return this.pinguService.update(+id, updatePinguDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinguService.remove(+id);
  }
}
