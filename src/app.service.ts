import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloEnvironment(): string {
    return 'Hello World!';
  }
}
