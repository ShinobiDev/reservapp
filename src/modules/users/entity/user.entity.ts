import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({ type: String, nullable: false, length: 30 })
    name!: string;

    @Column({ type: Number, nullable: false, unique: true })
    documento?: number;

    @Column({ type: String, nullable: false, length: 50, unique: true })
    email!: string;

    @Column({ type: String, nullable: false })
    pass!: string;

    @Column({ type: String, nullable: false, default: false })
    delete?: boolean;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (this.pass) {
            const saltRounds = 10; // Número de rounds para el hashing
            this.pass = await bcrypt.hash(this.pass, saltRounds);
        }
    }
}