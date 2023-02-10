import { NestFactory } from '@nestjs/core';
import { OssModule } from './oss.module';

async function bootstrap() {
  const app = await NestFactory.create(OssModule);
  await app.listen(3001);
}
bootstrap();
