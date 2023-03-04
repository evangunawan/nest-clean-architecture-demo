import { User } from 'src/domain/user/entity/user.entity';

export interface UserRepositoryInterface {
  fetchByUsername(username: string): Promise<User>;
  fetchById(id: string): Promise<User>;
  createUser(props: User): Promise<User>;
}
