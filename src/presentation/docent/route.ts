import { Router } from "express";
import { DocentController } from "./controller";
import { DocentService } from "../services/docent.service";

export class DocentRoutes{
    static get routes(): Router{
        const routes= Router();
        const docentService = new DocentService();
        const controller = new DocentController(docentService);
        routes.get('/',controller.findAll);
        routes.get('/:id',controller.findOne);
        routes.post('/',controller.create);
        routes.delete('/:id',controller.delete);
        routes.put('/:id',controller.update);

        return routes;
    }
}