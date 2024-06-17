import { PasswordHashingService } from '@namnh240795/password-hashing';
import { PrismaService } from '@namnh240795/prisma';
import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly passwordHashingService: PasswordHashingService,
  ) {}

  async register(registerDto: RegisterDto): Promise<{ message: string }> {
    const { email, name, password } = registerDto;
    const hashingPassword =
      await this.passwordHashingService.hashPassword(password);

    await this.prismaService.user.create({
      data: {
        email,
        name,
        password: hashingPassword,
      },
    });
    return { message: 'Register successfully' };
  }
}
