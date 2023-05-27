import { Module } from '@nestjs/common';
import { UserController } from './user/user/user.controller';
import { UserModule } from './user/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
