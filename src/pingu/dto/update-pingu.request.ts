import { PartialType } from '@nestjs/swagger';
import { CreatePinguRequest } from './create-pingu.request';

export class UpdatePinguRequest extends PartialType(CreatePinguRequest) {}
