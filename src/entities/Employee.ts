import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Company } from "./Company";

@Entity('employee')
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name:"name" })
    name: string;

    @Column({ name:"cpf" })
    cpf: string;

    @Column({ name: "email"})
    email: string;

    @Column({ name: "address"})
    address: string; 

    @ManyToOne(() => Company, (company) => company.employees)  
    @JoinColumn({ name: "company_id" })
    company?: Company;

}
