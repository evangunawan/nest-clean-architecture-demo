import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import CreateUserApp from 'src/app/user/create-user/create-user.app';
import CreateUserDto, { createUserValidationPipe } from 'src/app/user/create-user/create-user.dto';
import FetchUserApp from 'src/app/user/fetch-user/fetch-user.app';
import FetchUserDto from 'src/app/user/fetch-user/fetch-user.dto';
import { RequestValidationPipe } from 'src/controllers/common/pipes/request.validation-pipe';
import MongooseUserRepository from 'src/infrastructure/persistences/mongodb/user/user.repository';

@Controller()
export class UserController {
  constructor(private readonly _mongoDbUserRepository: MongooseUserRepository) {}

  @Get('/users/:userId')
  public async fetchUser(@Req() req: Request, @Param('userId') userId: string) {
    try {
      const useCase = await new FetchUserApp(this._mongoDbUserRepository).execute(
        new FetchUserDto({ userId })
      );
      if (useCase === null || useCase === undefined) {
        req.res.status(204);
        return;
      }
      req.res.status(200).json(useCase);
    } catch (err) {
      if (err?.name === 'CastError') {
        throw new HttpException('Bad ID Format', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/users')
  public async createUser(
    @Req() req: Request,
    @Body(new RequestValidationPipe(createUserValidationPipe)) body: Record<string, any>
  ) {
    try {
      const useCase = await new CreateUserApp(this._mongoDbUserRepository).execute(
        new CreateUserDto({
          username: body.username,
          fullName: body.fullName,
          password: body.password,
        })
      );

      req.res.status(201).json(useCase);
      return;
    } catch (err) {}
  }
}
