import { Controller, Get } from '@nestjs/common';
import { OssService } from './oss.service';

@Controller()
export class OssController {
  constructor(private readonly ossService: OssService) {}

  @Get()
  getHello(): string {
    console.log(process.env.OSS_ENDPOINT);
    return this.ossService.getHello();
  }
}
