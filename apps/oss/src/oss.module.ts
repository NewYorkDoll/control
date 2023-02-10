import { Module } from '@nestjs/common';
import { OssController } from './oss.controller';
import { OssService } from './oss.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.oss',
    }),
  ],
  controllers: [OssController],
  providers: [OssService],
})
export class OssModule {}
