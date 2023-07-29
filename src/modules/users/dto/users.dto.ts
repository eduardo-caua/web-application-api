import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class UsersDto {
  @ApiProperty({
    type: UserDto,
    isArray: true,
    description: 'Users list',
  })
  rows: UserDto[];

  @ApiProperty({ example: 1, description: 'The total count of user' })
  count: number;
}
