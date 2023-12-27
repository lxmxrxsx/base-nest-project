import { Injectable } from '@nestjs/common';
import { CreatePinguDto } from './dto/create-pingu.dto';
import { UpdatePinguDto } from './dto/update-pingu.dto';
import { PinguRepository } from './pingu.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Pingu } from './entities/pingu.entity';

@Injectable()
export class PinguService {
  constructor(
    @InjectRepository(PinguRepository)
    private repository: PinguRepository,
  ) {}
  async create(createPinguDto: CreatePinguDto): Promise<Pingu> {
    return this.repository.save(createPinguDto);
  }

  findAll() {
    return `This action returns all pingu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pingu`;
  }

  update(id: number, updatePinguDto: UpdatePinguDto) {
    return `This action updates a #${id} pingu`;
  }

  remove(id: number) {
    return `This action removes a #${id} pingu`;
  }

  notBool(bool: boolean): boolean {
    return !bool;
  }
}
