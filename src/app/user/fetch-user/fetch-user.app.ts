import { UseCase } from 'src/app/common/use-case.app';
import { UserRepositoryInterface } from 'src/infrastructure/persistences/common/interfaces/user/user.repository';
import FetchUserDto from './fetch-user.dto';

type RequiredUserRepository = UserRepositoryInterface;

export default class FetchUserApp extends UseCase {
  constructor(private _userRepository: RequiredUserRepository) {
    super();
  }

  public async execute(props: FetchUserDto): Promise<any> {
    const findUser = await this._userRepository.fetchById(props.userId);
    return findUser;
  }
}
