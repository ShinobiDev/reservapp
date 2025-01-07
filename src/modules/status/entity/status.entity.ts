import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Status {

    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({ type: String, nullable: false, length: 10, unique: true })
    name!: string;

    @Column({ type: String, nullable: false, default: false })
    delete?: boolean
}