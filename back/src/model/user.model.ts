import { Table, Column, Model, DataType, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.TEXT)
  lastName: string;

  @Column(DataType.TEXT)
  email: string;

  @Unique
  @Column(DataType.STRING)
  password: string;
}
