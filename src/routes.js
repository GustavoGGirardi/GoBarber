import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Gustavo Girardi",
    email: "gustavo_awd@hotmail.com",
    password_hash: "123456"
  });
  return res.json(user);
});

export default routes;
