import { Injectable } from '@nestjs/common';

@Injectable()
export class OssService {
  getHello(): string {
    return 'Hello World!';
  }
}
