import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordHashingService {
  private readonly salt: number = 10;

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.salt);
  }

  comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
