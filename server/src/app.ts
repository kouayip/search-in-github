import { launch } from "./server";
import dotenv from "dotenv";

// env config
dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4242;

launch(PORT);
