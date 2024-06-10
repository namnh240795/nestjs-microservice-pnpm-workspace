import { ApiProperty } from '@nestjs/swagger';

export class GoogleSignInDto {
  @ApiProperty({ description: 'Google token' })
  token: string;
}
