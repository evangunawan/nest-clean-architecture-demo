import { User } from 'src/domain/user/entity/user.entity';
import { UserRepositoryInterface } from 'src/infrastructure/persistences/common/interfaces/user/user.repository';
import { UseCase } from '../../common/use-case.app';
import CreateUserDto from './create-user.dto';

type RequiredUserRepository = UserRepositoryInterface;

export default class CreateUserApp extends UseCase {
  constructor(private _userRepository: RequiredUserRepository) {
    super();
  }

  public async execute(dto: CreateUserDto) {
    const newUser = await this._userRepository.createUser(
      new User({
        username: dto.username,
        password: dto.password,
        fullName: dto.fullName,
      })
    );

    return newUser;
  }
}
