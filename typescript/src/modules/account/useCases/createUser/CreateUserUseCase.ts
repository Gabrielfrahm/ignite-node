import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '@modules/account/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/account/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const checkEmail = await this.usersRepository.findByEmail(email);

    if (checkEmail) {
      throw new AppError('Email already in use', 422);
    }

    const passwordHashed = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHashed,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
