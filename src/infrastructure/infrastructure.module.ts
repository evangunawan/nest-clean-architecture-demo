import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { UserInfrastructureModule } from './persistences/mongodb/user/user.module';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL, { dbName: 'nest_demo' }),
    UserInfrastructureModule,
  ],
})
export class InfrastructureModule {}
