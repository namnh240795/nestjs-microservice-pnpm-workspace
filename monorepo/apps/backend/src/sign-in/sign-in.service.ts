import { Injectable } from '@nestjs/common';
import { GoogleSignInDto } from './dto/google-sign-in.dto';
import { GoogleAuthService } from '@namnh240795/google-auth';
import { TokenPayload } from 'google-auth-library';
import { MongoPrismaService } from '@namnh240795/mongo-prisma';

@Injectable()
export class SignInService {
  constructor(
    private readonly googleAuthService: GoogleAuthService,
    private readonly mongoPrismaService: MongoPrismaService,
  ) {}
  async googleSignIn(dto: GoogleSignInDto) {
    const data: TokenPayload = await this.googleAuthService.verify(dto.token);
    console.log(data);
  }

  mongo() {
    return this.mongoPrismaService.locale.create({
      data: {
        name: 'Vietnamese (Vietnam)',
        abbreviation: 'vi-VN',
        dominant: 'vi-VN',
      },
    });
  }
}
