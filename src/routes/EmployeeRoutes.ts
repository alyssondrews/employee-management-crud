import { Router } from "express";
import EmployeeController from "../controllers/EmployeeController";
import { validateCreateEmployee} from "../schemas/EmployeeSchema";

const EmployeeRoutes = Router();
const employeeController = new EmployeeController();


EmployeeRoutes.post("/",validateCreateEmployee, employeeController.create);
EmployeeRoutes.put("/:id", employeeController.update)
EmployeeRoutes.delete("/:id",  employeeController.deleteById);
EmployeeRoutes.get("/", employeeController.findAll);
EmployeeRoutes.get("/:id", employeeController.findById)

export default EmployeeRoutes;
