import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repo = new UserRepository();
const service = new UserService(repo);

test("test mock class findById", () => {
  const user = { id: 1, name: "Bondan" };
  const findByIdMock = jest.spyOn(repo, "findById");
  findByIdMock.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(repo.findById).toHaveBeenCalled();
});
