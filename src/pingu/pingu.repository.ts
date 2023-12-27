import { DataSource, Repository } from 'typeorm';
import { Pingu } from './entities/pingu.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PinguRepository extends Repository<Pingu> {
  constructor(private dataSource: DataSource) {
    super(Pingu, dataSource.createEntityManager());
  }
}
