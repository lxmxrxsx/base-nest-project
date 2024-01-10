import { Module } from '@nestjs/common';
import { PinguService } from './service/pingu.service';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { PinguRepository } from '../infrastructure/repository/pingu.repository';

@Module({
  imports: [InfrastructureModule],
  providers: [PinguService, PinguRepository],
  exports: [PinguService],
})
export class ApplicationModule {}
