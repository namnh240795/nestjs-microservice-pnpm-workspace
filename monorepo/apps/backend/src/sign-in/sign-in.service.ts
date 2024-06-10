import { Injectable } from '@nestjs/common';
import { GoogleSignInDto } from './dto/google-sign-in.dto';
import { GoogleAuthService } from '@namnh240795/google-auth';
import { TokenPayload } from 'google-auth-library';

@Injectable()
export class SignInService {
  constructor(private readonly googleAuthService: GoogleAuthService) {}
  async googleSignIn(dto: GoogleSignInDto) {
    const data: TokenPayload = await this.googleAuthService.verify(dto.token);
    console.log(data);
  }
}
