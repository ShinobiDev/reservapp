import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {

    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({ type: String, nullable: false, length: 20, unique: true })
    name!: string;

    @Column({ type: Boolean, nullable: false, default: false })
    delete?: boolean
}