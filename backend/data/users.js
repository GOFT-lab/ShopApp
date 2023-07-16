import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "Admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Martin",
    email: "John@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Elvis Pods",
    email: "Elvis@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
