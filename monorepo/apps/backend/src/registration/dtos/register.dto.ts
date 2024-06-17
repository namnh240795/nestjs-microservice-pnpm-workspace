import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;
}

export class RegisterDtoResponse {
  @ApiProperty()
  message: string;
}
