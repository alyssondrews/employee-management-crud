import { ICreateEmployeeDTO } from "../dtos/EmployeeDTO";
import { Employee } from "../entities/Employee";
import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { errorMessage, errorStatus } from "../utils/constants/ErrorConstants";
import { DeleteResult } from "typeorm/index";

export default class EmployeeService {
  private readonly employeeRepository: EmployeeRepository;

  constructor() {
    this.employeeRepository = new EmployeeRepository();
  }

  public async create(data: ICreateEmployeeDTO): Promise<Employee | undefined> {
    const employee = await this.employeeRepository.create(data);
    if (!employee) throw { status: errorStatus.internal_server_error, message: errorMessage.cannot_create_employee };
    const employeeCreated = await this.employeeRepository.findById(employee.id.toString());
    return employeeCreated;
  }

  public async findById(id: string): Promise<Employee | undefined> {
    const employee = await this.employeeRepository.findById(id);
    if (!employee) throw { status: errorStatus.bad_request, message: errorMessage.id_not_found };

    return employee;
  }

  public async findAll(): Promise<Employee[] | undefined> {
    const employees = await this.employeeRepository.findAll();

    return employees;
  }

  public async update(id: string, data: ICreateEmployeeDTO): Promise<Employee | undefined> {
    const employee = await this.employeeRepository.findById(id);
    const assign = Object.assign(employee, data);
    await this.employeeRepository.save(assign);
    const employeeUpdated = await this.employeeRepository.findById(id);
    return employeeUpdated;
  }

  public async delete(id: string): Promise<DeleteResult> {
    return await this.employeeRepository.deleteById(id);
  }
}
