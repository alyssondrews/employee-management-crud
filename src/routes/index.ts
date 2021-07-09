import { Router } from 'express';
import EmployeeRoutes from "./EmployeeRoutes";
import CompanyRoutes from './CompanyRoutes';

const routes = Router();

routes.use('/company', CompanyRoutes)
routes.use("/employee", EmployeeRoutes);

export default routes;
