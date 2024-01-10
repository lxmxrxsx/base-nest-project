import { Module } from '@nestjs/common';
import { JoiPipeModule } from 'nestjs-joi';
import { PinguController } from './controller/pingu.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [JoiPipeModule, ApplicationModule],
  controllers: [PinguController],
})
export class ApiModule {}
