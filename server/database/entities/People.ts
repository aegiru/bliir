import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Entity()
export class People {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text", { unique: true, nullable: false })
    name: string;

    @ManyToOne(() => Users, (user) => user.id, {
        primary: false,
        cascade: true,
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
    })
    added_by: string;

    @Column("timestamp with time zone", { default: () => "CURRENT_TIMESTAMP", nullable: false })
    added_timestamp: Date;
}