import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Employee } from "./Employee";

@Entity('company')
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name"})
    name: string;

    @Column({ name: "cnpj"})
    cnpj: string;

    @Column({ name: "address"})
    address: string; 

    @ManyToMany(() => Employee, (employee) => employee.companies)
    @JoinTable({
        name: "company_employee",
        joinColumn: {
            name: "company_id",
        },
        inverseJoinColumn: {
            name: "employee_id",
        },
    })
    employees?: Employee[];

}
