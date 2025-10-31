import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Plan {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    price:number
}
