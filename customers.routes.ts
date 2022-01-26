import { Router } from "express";
import customersController from "../controller/customersController";

const customersRoutes = Router();

customersRoutes.post("/", customersController.create)
customersRoutes.get("/:id", customersController.show)
customersRoutes.put("/:id", customersController.update)

export default customersRoutes;
