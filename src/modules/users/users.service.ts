import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { UsersDto } from './dto/users.dto';
import { USER_REPOSITORY } from '../../core/constants';
import { Op } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof User,
  ) {}

  async find(name: string, offset: number, limit: number): Promise<UsersDto> {
    let options: object = {
      limit: limit,
      offset: offset,
      order: [['name', 'ASC']],
    };

    if (name) {
      options['where'] = {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      };
    }

    return await this.userRepository.findAndCountAll<User>(options);
  }

  async findAll(name: string): Promise<UserDto[]> {
    let options: object = {
      order: [['name', 'ASC']],
    };

    options['where'] = {};

    if (name) {
      options['where'] = {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      };
    }

    return await this.userRepository.findAll<User>(options);
  }

  async findOneById(id: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async update(id: string, user: UserDto): Promise<[number]> {
    return await this.userRepository.update<User>(user, {
      where: { id },
      individualHooks: true,
    });
  }

  async delete(id: string): Promise<boolean> {
    return (await this.userRepository.destroy<User>({ where: { id } })) == 1;
  }
}
