import { ApiProperty } from '@nestjs/swagger';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class CreatePinguRequest {
  @ApiProperty()
  @JoiSchema(Joi.string().required().min(1))
  name: string;
  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  isAngry: boolean;
}
