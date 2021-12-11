import { User } from ".prisma/client";
import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { UserService } from "../services/user.service";

class UserController {
  private _service: UserService;

  constructor() {
    this._service = new UserService();
  }

  async getByUsername(req: Request, res: Response) {
    const { username } = req.params;

    try {
      let user: User | UserModel | null = await this._service.getUserByUsername(
        username
      );

      if (!user) {
        user = await this._service.fetchUser(username);
      }
      return res.status(200).json(user);
    } catch (e) {
      console.error("ERROR", e);

      res.status(400).json({
        sucess: false,
        message: "error to fetch user",
      });
    }
  }
}

export default new UserController();
