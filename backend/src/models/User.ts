import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

export class User extends Model {
  public id!: number;
  public user_name!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  { sequelize, modelName: 'user', timestamps: false }
);
