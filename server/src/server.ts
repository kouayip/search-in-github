import express from "express";
import cors from "cors";
import routes from "./routes";

export function launch(port: number) {
  // Create an Express application
  const app = express();

  app.use(cors());

  // Install all routes in app
  app.use("/", routes);

  // Started Server
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}
