import { Module } from '@nestjs/common';
import { UserModule } from './controllers/user/user.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
