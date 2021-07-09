import { Router } from 'express';
import EmployeeRoutes from "./EmployeeRoutes";

const routes = Router();

routes.use("/employee", EmployeeRoutes);

export default routes;
