import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { Users } from "./Users";
import { People } from "./People";
import { Things } from "./Things";

@Entity()
export class Connections {
    @ManyToOne(() => Things, (thing) => thing.id, {
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @PrimaryColumn("uuid", { nullable: false })
    things_id: string;

    @ManyToOne(() => People, (person) => person.id, {
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @PrimaryColumn("uuid", { nullable: false })
    people_id: string;

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