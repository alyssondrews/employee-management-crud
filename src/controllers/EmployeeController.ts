import { Request, Response } from "express";
import { ProcessError } from "../utils/processError";
import EmployeeService from "../services/EmployeeService";
import { DeleteResult } from "typeorm";

export default class EmployeeController {
    

    public async create(req: Request, res: Response): Promise<Response | void> {
        try {
            const employeeService = new EmployeeService();
            const employee = await employeeService.create(req.body);
            
            return res.status(200).json(employee);
        } catch (err) {
            return ProcessError(res, err);
        }
    }
    
    public async findById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const employeeService = new EmployeeService();
            const employee = await employeeService.findById(id);
            return res.json(employee);
        } catch (err) {
            return ProcessError(res, err);
        }
    }
    
    public async findAll(_req: Request, res: Response): Promise<Response> {
        try {
            const employeeService = new EmployeeService();
            const employees = await employeeService.findAll();
            return res.status(200).json(employees);
        } catch (err) {
            return ProcessError(res, err);
        }
    }
    
    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const employeeService = new EmployeeService();
            const employee = await employeeService.update(id, req.body);
            return res.status(200).json(employee);
        } catch (err) {
            return ProcessError(res, err);
        }
    }

    public async deleteById(req: Request, res: Response): Promise<Response>{
        try {
            const { id } = req.params;
            const employeeService = new EmployeeService();
            const employee = await employeeService.delete(id)
            return res.status(200).json(employee)
        } catch (err) {
            return ProcessError(res, err)
        }
    }
}
