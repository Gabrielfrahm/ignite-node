import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    driver_license,
    password,
    email,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, { name, driver_license, password, email });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(user_id: string): Promise<User> {
    return this.users.find((user) => user.id === user_id);
  }
}

export { UsersRepositoryInMemory };
