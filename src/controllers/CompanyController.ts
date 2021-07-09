import { Request, Response } from "express";
import { ProcessError } from "../utils/processError";
import CompanyService from "../services/CompanyService";
import { DeleteResult } from "typeorm";

export default class CompanyController {
    

    public async create(req: Request, res: Response): Promise<Response | void> {
        try {
            const companyService = new CompanyService();
            const company = await companyService.create(req.body);
            
            return res.status(200).json(company);
        } catch (err) {
            return ProcessError(res, err);
        }
    }
    
    public async findById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const companyService = new CompanyService();
            const company = await companyService.findById(id);
            return res.json(company);
        } catch (err) {
            return ProcessError(res, err);
        }
    }
    
    public async findAll(_req: Request, res: Response): Promise<Response> {
        try {
            const companyService = new CompanyService();
            const companys = await companyService.findAll();
            return res.status(200).json(companys);
        } catch (err) {
            return ProcessError(res, err);
        }
    }
    
    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const companyService = new CompanyService();
            const company = await companyService.update(id, req.body);
            return res.status(200).json(company);
        } catch (err) {
            return ProcessError(res, err);
        }
    }

    public async deleteById(req: Request, res: Response): Promise<Response>{
        try {
            const { id } = req.params;
            const companyService = new CompanyService();
            const company = await companyService.delete(id)
            return res.status(200).json(company)
        } catch (err) {
            return ProcessError(res, err)
        }
    }
}
