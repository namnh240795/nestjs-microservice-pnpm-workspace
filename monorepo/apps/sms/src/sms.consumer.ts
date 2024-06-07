import { QUEUE, SERVICE, SMS_COMMAND } from '@namnh240795/events';
import {
  OnQueueActive,
  OnQueueError,
  OnQueueFailed,
  OnQueueStalled,
  OnQueueWaiting,
  Process,
  Processor,
} from '@nestjs/bull';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Processor(QUEUE.SMS)
export class SmsConsumer {
  constructor(@Inject(SERVICE.SMS) private client: ClientProxy) {}

  @Process()
  async process(job: any) {
    // rxjs delay before process
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('process', job.data);

    await this.client
      .send({ cmd: SMS_COMMAND.TRIGGER_SEND }, { data: job.data })
      .subscribe(() => {});
  }

  @OnQueueActive()
  onActive(job: any) {
    console.log('Processing job...', job.data);
  }

  @OnQueueFailed()
  onError(error: Error) {
    console.log('error', error);
  }

  @OnQueueWaiting()
  onWaiting(jobId: number) {
    console.log('Job waiting', jobId);
  }
}
