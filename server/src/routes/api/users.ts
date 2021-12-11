import { Router } from "express";
import controller from "../../controllers/user.controller";

const api = Router();

api.get("/:username", controller.getByUsername.bind(controller));

export default api;
