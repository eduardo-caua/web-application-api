import { Controller, Body, Post, Get, Put, Delete, Param, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { OFFSET, LIMIT } from '../../core/constants';
import { UsersService } from './users.service';
import { UserDto } from '../users/dto/user.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
import { UsersDto } from './dto/users.dto';

@ApiTags('Users')
@Controller({ path: 'users', version: ['v1'] })
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Find for users' })
  @ApiResponse({
    status: 200,
    description: 'Successfully requested.',
    type: UsersDto,
  })
  @ApiQuery({ name: '_offset', required: false, type: Number })
  @ApiQuery({ name: '_limit', required: false, type: Number })
  @ApiQuery({ name: 'name', required: false, type: String })
  async findUsers(@Query('_offset') offset?: number, @Query('_limit') limit?: number, @Query('name') name?: string) {
    return await this.usersService.find(name, offset || OFFSET, limit || LIMIT);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Find for a user by Id' })
  @ApiResponse({
    status: 200,
    description: 'Successfully requested.',
    type: UserDto,
  })
  async findOneUserById(@Param('id') id: string) {
    return await this.usersService.findOneById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({
    status: 201,
    description: 'Successfully requested.',
    type: UserDto,
  })
  async create(@Body() user: UserDto) {
    return await this.usersService.create(user);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Update a user by Id' })
  @ApiResponse({ status: 204, description: 'Successfully requested.' })
  async update(@Param('id') id: string, @Body() user: UserDto) {
    return await this.usersService.update(id, user);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a user by Id' })
  @ApiResponse({ status: 204, description: 'Successfully requested.' })
  async delete(@Param('id') id: string) {
    return await this.usersService.delete(id);
  }
}
