import { Router } from "express";
import customersRoutes from "./customers.routes";

const routes = Router()

routes.use('/customers', customersRoutes)

export default routes;