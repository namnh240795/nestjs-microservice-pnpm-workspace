import { QUEUE } from '@namnh240795/events';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class SmsService {
  constructor(
    @InjectQueue(QUEUE.SMS) private smsQueue: Queue,
    private readonly httpService: HttpService,
  ) {}

  async addToQueue(data: any) {
    console.log('add to queue');
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
    } catch (error) {}
  }

  getHello() {
    return 'Hehehe';
  }
}
