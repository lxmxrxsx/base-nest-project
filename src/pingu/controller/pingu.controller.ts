import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PinguService } from '../service/pingu.service';
import { CreatePinguRequest } from '../dto/create-pingu.request';
import { UpdatePinguRequest } from '../dto/update-pingu.request';
import { ApiBody } from '@nestjs/swagger';
import { PinguMapper } from '../service/pingu.mapper';

@Controller('pingu')
export class PinguController {
  constructor(private readonly pinguService: PinguService) {}

  @Post()
  @ApiBody({ type: CreatePinguRequest })
  async create(@Body() createPinguRequest: CreatePinguRequest) {
    const pingu = PinguMapper.toDomainFromRequest(createPinguRequest);
    return this.pinguService.create(pingu);
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
  update(@Param('id') id: string, @Body() updatePinguDto: UpdatePinguRequest) {
    return this.pinguService.update(+id, updatePinguDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinguService.remove(+id);
  }
}
