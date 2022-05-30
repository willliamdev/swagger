import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id)

    if (!user) {
      throw new Error("user not exists")
    }

    if (user.admin) {
      const users = this.usersRepository.list()
      return users

    } else {
      throw new Error("This user doesn't have admin privileges")

    }
  }
}

export { ListAllUsersUseCase };
