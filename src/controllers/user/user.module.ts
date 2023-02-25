import { Module } from '@nestjs/common';
import { UserInfrastructureModule } from 'src/infrastructure/persistences/mongodb/user/user.module';
import { UserController } from './http/user.controller';

@Module({
  imports: [UserInfrastructureModule],
  controllers: [UserController],
})
export class UserModule {}
