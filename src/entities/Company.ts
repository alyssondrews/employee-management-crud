import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
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

    @OneToMany(() => Employee, (employee) => employee.company)
    employees?: Employee[];

}
