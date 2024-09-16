import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey, mate, just go to the doc! Redirect:)';
  }
}
