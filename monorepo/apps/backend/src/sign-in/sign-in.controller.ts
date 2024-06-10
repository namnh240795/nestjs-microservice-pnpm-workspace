import { Body, Controller, Post } from '@nestjs/common';
import { SignInService } from './sign-in.service';
import { GoogleSignInDto } from './dto/google-sign-in.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sign-in')
@Controller('sign-in')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post('/google')
  async googleSignIn(@Body() dto: GoogleSignInDto) {
    return this.signInService.googleSignIn(dto);
  }
}
