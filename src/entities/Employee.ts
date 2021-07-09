import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
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
    
    @ManyToMany(() => Company, (company) => company.id)
    companies?: Company[];

}
