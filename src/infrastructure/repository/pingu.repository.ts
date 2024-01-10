import { DataSource, Repository } from 'typeorm';
import { PinguEntity } from './entities/pingu.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PinguRepository extends Repository<PinguEntity> {
  constructor(private dataSource: DataSource) {
    super(PinguEntity, dataSource.createEntityManager());
  }
}
