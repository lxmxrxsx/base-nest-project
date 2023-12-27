import { Module } from '@nestjs/common';
import { PinguService } from './pingu.service';
import { PinguController } from './pingu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PinguRepository } from './pingu.repository';
import { Pingu } from './entities/pingu.entity';
import { JoiPipeModule } from 'nestjs-joi';

@Module({
  imports: [TypeOrmModule.forFeature([Pingu]), JoiPipeModule],
  controllers: [PinguController],
  providers: [PinguService, PinguRepository],
})
export class PinguModule {}
