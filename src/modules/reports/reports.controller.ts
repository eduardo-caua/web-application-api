import { Controller, Get, HttpCode, HttpStatus, Res, Query } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ApiOperation, ApiProduces, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
import { Parser as CsvParser } from 'json2csv';
import { Response } from 'express';

@ApiTags('Reports')
@Controller({ path: 'reports', version: ['v1'] })
export class ReportsController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Download user report' })
  @ApiResponse({ status: 200, description: 'Successfully requested.' })
  @ApiQuery({ name: 'name', required: false, type: String })
  @ApiProduces('text/csv')
  async findUsers(@Res() res: Response, @Query('name') name?: string) {
    const users = await this.usersService.findAll(name);
    const fields = ['id', 'name', 'email', 'phone', 'createdAt', 'updatedAt'];
    const csvParser = new CsvParser({ fields });
    const csv = csvParser.parse(users);

    return res
      .set('Content-Type', 'text/csv')
      .set('Content-Disposition', `attachment; filename=users-report-${new Date().toISOString()}.csv`)
      .status(200)
      .end(csv);
  }
}
