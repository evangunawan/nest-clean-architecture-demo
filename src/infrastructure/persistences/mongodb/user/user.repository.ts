import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/domain/user/entity/user.entity';
import { UserRepositoryInterface } from '../../common/interfaces/user/user.repository';
import { UserDocument, UserModel } from './user.schema';

@Injectable()
export default class MongooseUserRepository implements UserRepositoryInterface {
  constructor(@InjectModel(UserModel.name) private userModel: Model<UserDocument>) {}

  public async createUser(props: User): Promise<User> {
    const modelObject = this.mapToModel(props);
    const newUser = new this.userModel(modelObject);
    return this.mapToEntity(await newUser.save());
  }

  public async fetchByUsername(username: string): Promise<User> {
    const user = await this.userModel.find({ username: username }).exec();
    if (user[0]) {
      return this.mapToEntity(user[0]);
    }
    return null;
  }

  public async fetchById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    return user ? this.mapToEntity(user) : null;
  }

  private mapToModel(user: User) {
    return new UserModel({
      username: user.username,
      full_name: user.fullName,
      password: user.password,
    });
  }

  private mapToEntity(user: UserModel) {
    return new User({
      id: user['_id'],
      fullName: user['full_name'],
      password: user['password'],
      username: user['username'],
    });
  }
}
