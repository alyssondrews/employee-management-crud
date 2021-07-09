import { Router } from "express";
import EmployeeController from "../controllers/EmployeeController";
// import { validateCalculateCallPrice, validateCreateCallInfo } from "../schemas/CallInfoSchema";

const EmployeeRoutes = Router();
const employeeController = new EmployeeController();


EmployeeRoutes.post("/", employeeController.create);
EmployeeRoutes.put("/:id", employeeController.update)
EmployeeRoutes.delete("/:id",  employeeController.deleteById);
EmployeeRoutes.get("/", employeeController.findAll);
EmployeeRoutes.get("/:id", employeeController.findById)

export default EmployeeRoutes;
