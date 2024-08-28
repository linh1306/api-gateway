import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IpAddress } from './ip-address.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async myEndpointFunc(@IpAddress() ipAddress: string) {
    return { ipAddress };
  }
}
