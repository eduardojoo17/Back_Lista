import express, { type Application } from "express";
import { AppDataSource } from "./data-source.js";
import { listaRoutes } from "./routes/listaRoutes.js";

const app: Application = express();
app.use(express.json());
app.use("/api/lista",listaRoutes)

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Erro ao conectar no banco: ", error));
