import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'John Doe', description: 'The user name' })
  readonly name: string;

  @ApiProperty({
    example: 'john.doe@gmail.com',
    description: 'The user email',
  })
  readonly email: string;

  @ApiProperty({
    example: '+1 222 333 4444',
    description: 'The user phone number',
  })
  readonly phone: string;

  @ApiProperty({
    example: 'secret-word',
    description: 'The user password',
  })
  readonly password: string;
}
