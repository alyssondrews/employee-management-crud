import { Repository, getRepository, DeleteResult } from "typeorm";
import { Company } from "../entities/Company";
import { ICreateCompanyDTO } from "../dtos/CompanyDTO";

export class CompanyRepository {
    private readonly companyRepository: Repository<Company>;

    constructor() {
        this.companyRepository = getRepository(Company);
    }

    public async create(data: ICreateCompanyDTO): Promise<Company> {
        const company = await this.companyRepository.create(data);
        await this.companyRepository.save(company);
        return company;
    }

    public async save(data: Company): Promise<Company> {
        return await this.companyRepository.save(data);
    }

    public async findAll(): Promise<Company[]> {
        const company = await this.companyRepository.createQueryBuilder('c').leftJoinAndSelect('c.employees', 'ce').getMany();
        return company;
    }

    public async findById(id: string): Promise<Company | undefined> {
        const company = await this.companyRepository.createQueryBuilder('c').leftJoinAndSelect('c.employees', 'ce').where(`c.id = ${id}`).getOne();
        return company;
    }

    public async deleteById(id: string): Promise<DeleteResult> {
        return await this.companyRepository.delete(id)
    }
}
