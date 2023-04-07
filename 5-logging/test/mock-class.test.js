import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository.js");

const repo = new UserRepository();
const service = new UserService(repo); // Kita memasukkan mock object

// Mock class save
test("test mock class save", () => {
  const user = { id: 1, name: "Eko" };
  service.save(user);
  expect(repo.save).toHaveBeenCalled();
  expect(repo.save).toHaveBeenCalledWith(user);
});

// Mock class findById
test("test mock class findById", () => {
  const user = { id: 1, name: "Bondan" };
  repo.findById.mockReturnValueOnce(user);
  expect(service.findById(1)).toEqual(user);
  expect(repo.findById).toHaveBeenCalled();
});

// Mock class findAll
test("test mock class findAll", () => {
  const users = [
    { id: 1, name: "Bondan" },
    { id: 2, name: "Jody" },
  ];
  repo.findAll.mockReturnValueOnce(users);
  expect(service.findAll()).toEqual(users);
  expect(repo.findAll).toHaveBeenCalled();
});
