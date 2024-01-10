import { Injectable } from '@nestjs/common';
import { UpdatePinguRequest } from '../../api/controller/dto/update-pingu.request';
import { PinguRepository } from '../../infrastructure/repository/pingu.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePinguResponse } from '../../api/controller/dto/create-pingu.response';
import { updateBadge } from '../use-case/update-badge.use-case';
import { Pingu } from '../../model/pingu.model';
import { PinguMapper } from './pingu.mapper';

@Injectable()
export class PinguService {
  constructor(
    @InjectRepository(PinguRepository)
    private repository: PinguRepository,
  ) {}
  async create(pingu: Pingu): Promise<CreatePinguResponse> {
    const updatedPingu: Pingu = updateBadge(pingu);
    const savedPingu = await this.repository.save(updatedPingu);
    const pinguDomain = PinguMapper.toDomainFromEntity(savedPingu);
    return PinguMapper.toResponse(pinguDomain);
  }

  findAll() {
    return `This action returns all pingu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pingu`;
  }

  update(id: number, updatePinguDto: UpdatePinguRequest) {
    return `This action updates a #${updatePinguDto.name} pingu`;
  }

  remove(id: number) {
    return `This action removes a #${id} pingu`;
  }

  notBool(bool: boolean): boolean {
    return !bool;
  }
}
