import { User } from 'src/domain/user/entity/user.entity';

export interface UserRepositoryInterface {
  createUser(props: User): Promise<User>;
}
