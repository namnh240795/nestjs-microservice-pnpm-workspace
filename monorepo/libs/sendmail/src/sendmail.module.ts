import { Module } from '@nestjs/common';
import { SendmailService } from './sendmail.service';

@Module({
  providers: [SendmailService],
  exports: [SendmailService],
})
export class SendmailModule {}
