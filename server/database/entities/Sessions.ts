import { Entity, Column, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Sessions {
    @ManyToOne(() => Users, (user) => user.id, {
        primary: false,
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    users_id: string;

    @PrimaryColumn("text", { unique: true, nullable: false })
    session_cookie: string;

    @Column("timestamp with time zone", { default: () => "CURRENT_TIMESTAMP", nullable: false })
    expiration_timestamp: Date;
}