import { ApiProperty } from '@nestjs/swagger';

export class SmsOTPDto {
  @ApiProperty()
  phone: string;
}
