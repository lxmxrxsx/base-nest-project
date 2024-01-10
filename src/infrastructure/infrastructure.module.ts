import { TypeOrmModule } from '@nestjs/typeorm';
import { PinguEntity } from './repository/entities/pingu.entity';
import { JoiPipeModule } from 'nestjs-joi';
import { PinguRepository } from './repository/pingu.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([PinguEntity]), JoiPipeModule],
  providers: [PinguRepository],
})
export class InfrastructureModule {}
