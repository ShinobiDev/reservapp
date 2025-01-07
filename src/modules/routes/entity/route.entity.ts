import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Route {

    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({ type: Number, nullable: false })
    origin_id!: number;

    @Column({ type: Number, nullable: false })
    destination_id!: number;

    @Column({ type: Date, nullable: false })
    date!: any;

    @Column({ type: String, nullable: false })
    hour!: string;

    @Column({ type: Number, nullable: false })
    create_user_id!: number;

    @Column({ type: Date, nullable: false })
    date_create_user_id?: any;

    @Column({ type: Boolean, nullable: false, default: false })
    delete?: boolean

    @Column({ type: Number, nullable: false })
    delete_user_id?: number;

    @Column({ type: Date, nullable: false })
    date_delete_user_id?: any;
}