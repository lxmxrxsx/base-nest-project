import { Module } from '@nestjs/common';
import { PinguService } from './service/pingu.service';
import { PinguController } from './controller/pingu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PinguRepository } from './repository/pingu.repository';
import { JoiPipeModule } from 'nestjs-joi';
import { PinguEntity } from './repository/entities/pingu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PinguEntity]), JoiPipeModule],
  controllers: [PinguController],
  providers: [PinguService, PinguRepository],
})
export class PinguModule {}
