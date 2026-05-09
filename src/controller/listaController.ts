import type {Response,Request, NextFunction } from "express";
import { ListaService } from "../service/listaService.js";

export class ListaController {
private listaService = new ListaService();
    create = async (req:Request,res: Response, next: NextFunction)=>{
        try {
            const prod = await this.listaService.create(req.body);
            return res.status(201).json(prod)
        } catch (error:unknown) {
            next(error);
        }
    };

    listar = async(req:Request,res: Response, next: NextFunction)=>{
        try {
            const prod = await this.listaService.listar();
            return res.json(prod)
        } catch (error:unknown) {
            next(error);
        }
    }

}