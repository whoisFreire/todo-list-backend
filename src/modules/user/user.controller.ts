import { Controller, Headers, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/usecases/user/create-user-use-case';
import { CreateUserDTO } from './dtos/CreateUserDTO';
import { UserViewModel } from './view-models/user-view-model';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async register(@Headers() header: CreateUserDTO) {
    const { name, email, password } = header;
    const { user } = await this.createUserUseCase.execute({
      name,
      email,
      password,
    });

    return UserViewModel.toHTTP(user);
  }
}
