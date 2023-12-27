import { PartialType } from '@nestjs/swagger';
import { CreatePinguDto } from './create-pingu.dto';

export class UpdatePinguDto extends PartialType(CreatePinguDto) {}
