import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { UsersService } from '../users/users.service';
import { usersProviders } from '../users/users.providers';

@Module({
  controllers: [ReportsController],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class ReportsModule {}
