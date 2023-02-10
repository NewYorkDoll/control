import { Test, TestingModule } from '@nestjs/testing';
import { OssController } from './oss.controller';
import { OssService } from './oss.service';

describe('OssController', () => {
  let ossController: OssController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OssController],
      providers: [OssService],
    }).compile();

    ossController = app.get<OssController>(OssController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ossController.getHello()).toBe('Hello World!');
    });
  });
});
