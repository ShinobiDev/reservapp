import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Type {

    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({ type: String, nullable: false, length: 20, unique: true })
    name!: string;

    @Column({ type: String, nullable: false, default: false })
    delete?: boolean
}