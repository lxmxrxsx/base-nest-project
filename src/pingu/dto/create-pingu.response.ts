import { ApiProperty } from '@nestjs/swagger';

export class CreatePinguResponse {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  isAngry: boolean;
  @ApiProperty()
  badge: string;
}
