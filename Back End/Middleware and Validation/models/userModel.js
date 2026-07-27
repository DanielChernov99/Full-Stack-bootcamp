const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function createUser(name) {
  const newUser = {
    id: users.length + 1,
    name: name,
  };

  users.push(newUser);
  return newUser;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
