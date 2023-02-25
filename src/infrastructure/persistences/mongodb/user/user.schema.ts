import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserModel>;

@Schema({ collection: 'users' })
export class UserModel {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  full_name: string;

  constructor(props: Partial<UserModel>) {
    Object.assign(this, props);
  }
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
