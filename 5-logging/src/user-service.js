import { UserRepository } from "./user-repository";

export class UserService {
  constructor(userRepo) {
    if (userRepo) {
      this.userRepo = userRepo;
    } else {
      this.userRepo = new UserRepository();
    }
  }

  save(user) {
    this.userRepo.save(user);
  }

  findById(id) {
    return this.userRepo.findById(id);
  }

  findAll() {
    return this.userRepo.findAll();
  }
}
