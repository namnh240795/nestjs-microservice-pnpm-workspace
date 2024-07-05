import { Controller, Get, Render } from '@nestjs/common';
import { FrontendService } from './frontend.service';

@Controller()
export class FrontendController {
  constructor(private readonly frontendService: FrontendService) {}

  @Get()
  @Render('index')
  getHello() {}
}
