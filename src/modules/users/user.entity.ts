import Sequelize from 'sequelize';
import { Table, Column, Model, DataType, BeforeCreate, BeforeUpdate, PrimaryKey } from 'sequelize-typescript';
import * as bcrypt from 'bcryptjs';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;

  @BeforeCreate
  @BeforeUpdate
  static hashPassword(user: User) {
    if (user.dataValues.password && user.dataValues.password != '') {
      user.dataValues.password = bcrypt.hashSync(user.dataValues.password, bcrypt.genSaltSync(8));
    }
  }

  validPassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}
