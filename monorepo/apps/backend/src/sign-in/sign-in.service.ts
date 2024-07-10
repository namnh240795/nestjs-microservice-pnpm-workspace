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

  async mongo() {
    const a = await this.mongoPrismaService.locale.create({
      data: {
        name: 'English (United States)',
        abbreviation: 'en-US',
        dominant: 'en-US',
      },
    });
    const key = await this.mongoPrismaService.translationKey.create({
      data: {
        key: 'hello',
      },
    });
    await this.mongoPrismaService.translationLocale.createMany({
      data: [
        {
          translationKeyId: key.id,
          localeId: a.id,
          value: 'Hello',
        },
      ],
    });
  }
}
