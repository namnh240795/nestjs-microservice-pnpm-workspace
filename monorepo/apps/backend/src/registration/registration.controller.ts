import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegisterDto, RegisterDtoResponse } from './dtos/register.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('registration')
@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiCreatedResponse({
    description: 'Register successfully',
    type: RegisterDtoResponse,
  })
  register(@Body() dtos: RegisterDto) {
    return this.registrationService.register(dtos);
  }
}
