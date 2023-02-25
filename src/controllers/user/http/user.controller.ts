import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import CreateUserApp from 'src/app/user/create-user/create-user.app';
import CreateUserDto from 'src/app/user/create-user/create-user.dto';
import MongooseUserRepository from 'src/infrastructure/persistences/mongodb/user/user.repository';

@Controller()
export class UserController {
  constructor(private readonly _mongoDbUserRepository: MongooseUserRepository) {}

  @Post('/users')
  public async createUser(@Req() req: Request, @Body() body: Record<string, any>) {
    const useCase = await new CreateUserApp(this._mongoDbUserRepository).execute(
      new CreateUserDto({
        username: body.username,
        fullName: body.fullName,
        password: body.password,
      })
    );

    req.res.status(201).json(useCase);
    return;
  }
}
