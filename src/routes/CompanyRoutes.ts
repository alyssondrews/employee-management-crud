import { Router } from "express";
import CompanyController from "../controllers/CompanyController";
import { validateCreateCompany } from "../schemas/CompanySchema";

const CompanyRoutes = Router();
const companyController = new CompanyController();


CompanyRoutes.post("/", validateCreateCompany, companyController.create);
CompanyRoutes.put("/:id", companyController.update)
CompanyRoutes.delete("/:id",  companyController.deleteById);
CompanyRoutes.get("/", companyController.findAll);
CompanyRoutes.get("/:id", companyController.findById)

export default CompanyRoutes;
