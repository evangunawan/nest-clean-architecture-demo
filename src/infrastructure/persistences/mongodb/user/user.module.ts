import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import MongooseUserRepository from './user.repository';
import { UserModel, UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }])],
  providers: [MongooseUserRepository],
  exports: [MongooseUserRepository],
})
export class UserInfrastructureModule {}
