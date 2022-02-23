import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloEnvironment(): string {
    return `${this.appService.getHelloEnvironment()} - ${process.env.MESSAGE}`;
  }
}
