import { Router } from "express";
import CompanyController from "../controllers/CompanyController";
// import { validateCalculateCallPrice, validateCreateCallInfo } from "../schemas/CallInfoSchema";

const CompanyRoutes = Router();
const companyController = new CompanyController();


CompanyRoutes.post("/", companyController.create);
CompanyRoutes.put("/:id", companyController.update)
CompanyRoutes.delete("/:id",  companyController.deleteById);
CompanyRoutes.get("/", companyController.findAll);
CompanyRoutes.get("/:id", companyController.findById)

export default CompanyRoutes;
