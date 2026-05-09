import { Router } from "express";
import { ListaController } from "../controller/listaController.js";

const router = Router();
const listaController = new ListaController();


router.get("/", listaController.listar);
router.post("/",listaController.create);


export const listaRoutes = router;