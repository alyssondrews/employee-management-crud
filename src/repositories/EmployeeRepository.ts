import { Repository, getRepository, DeleteResult } from "typeorm";
import { Employee } from "../entities/Employee";
import { ICreateEmployeeDTO } from "../dtos/EmployeeDTO";

export class EmployeeRepository {
    private readonly employeeRepository: Repository<Employee>;

    constructor() {
        this.employeeRepository = getRepository(Employee);
    }

    public async create(data: ICreateEmployeeDTO): Promise<Employee> {
        const employee = await this.employeeRepository.create(data);
        await this.employeeRepository.save(employee);
        return employee;
    }

    public async save(data: Employee): Promise<Employee> {
        return await this.employeeRepository.save(data);
    }

    public async findAll(): Promise<Employee[]> {
        const employee = await this.employeeRepository.createQueryBuilder('e').leftJoinAndSelect('e.companies', 'ec').getMany();
        return employee;
    }

    public async findById(id: string): Promise<Employee | undefined> {
        const employee = await this.employeeRepository.createQueryBuilder('e').leftJoinAndSelect('e.companies', 'ec').where(`e.id = ${id}`).getOne();
        return employee;
    }

    public async deleteById(id: string): Promise<DeleteResult> {
        return await this.employeeRepository.delete(id)
    }
}
