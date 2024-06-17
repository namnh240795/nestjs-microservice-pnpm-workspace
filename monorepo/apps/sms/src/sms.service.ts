import { QUEUE } from '@namnh240795/events';
import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { AddQueueDto } from './dtos/add-queue.dto';

@Injectable()
export class SmsService {
  private readonly logger = new Logger(SmsService.name);

  constructor(
    @InjectQueue(QUEUE.SMS) private smsQueue: Queue,
    private readonly httpService: HttpService,
  ) {}

  async addToQueue(data: AddQueueDto) {
    await this.smsQueue.add(data, {
      attempts: 3,
    });
  }

  async sendSms(data: any) {
    try {
      await firstValueFrom(
        this.httpService
          .post(
            'https://discord.com/api/webhooks/1248575822214987879/8bLSEpoTouRBRNxglmmsmk5Fh7PG8m-LxAnv3WomXKLoJgFDeseEPK2Zc_uUi93uvoEu',
            {
              content: data.data.data,
            },
          )
          .pipe(
            catchError((error: AxiosError) => {
              console.log('error', error);
              throw 'An error happened!';
            }),
          ),
      );
    } catch (error) {
      this.logger.error(error);
    }
  }

  getHello() {
    return 'Hehehe';
  }
}
