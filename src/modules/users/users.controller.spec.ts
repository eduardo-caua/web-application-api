import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return empty list', () => {
      expect(controller.findUsers()).toBe([]);
    });
  });
});
