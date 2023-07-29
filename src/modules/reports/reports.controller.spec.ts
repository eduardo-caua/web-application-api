import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from './reports.controller';
import { UsersService } from '../users/users.service';
import { Response } from 'express';

describe('ReportsController', () => {
  let controller: ReportsController;

  const res: Partial<Response> = {
    status: jest.fn().mockImplementation().mockReturnValue(200),
    json: jest.fn().mockImplementation().mockReturnValue([]),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [UsersService],
    }).compile();

    controller = app.get<ReportsController>(ReportsController);
  });

  describe('root', () => {
    it('should return empty list', () => {
      expect(controller.findUsers(res as Response)).toBe([]);
    });
  });
});
