import { Injectable } from '@nestjs/common';
import { User } from 'src/application/entities/user';
import { UserRepository } from 'src/application/repositories/user-repository';
import { UserNotFound } from './errors/user-not-found';

interface UpdateUserEmailRequest {
  userId: string;
  email: string;
}

interface UpdateUserEmailResponse {
  user: User;
}

@Injectable()
export class UpdateUserEmailUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    request: UpdateUserEmailRequest,
  ): Promise<UpdateUserEmailResponse> {
    const { email, userId } = request;
    const user = await this.userRepository.findById(userId);

    if (!user) throw new UserNotFound();

    user.email = email;
    await this.userRepository.save(user);

    return {
      user,
    };
  }
}
