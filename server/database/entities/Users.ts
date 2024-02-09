import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text", {
        unique: true,
        nullable: false
    })
    username: string;

    @Column("text", {
        unique: true,
        nullable: false
    })
    email: string;

    @Column("text", { nullable: false })
    password_hash: string;

    @Column("integer", {
        default: 0,
        nullable: false,
        range: [0, 3],
        comment: "0 = not verified user, 1 = verified user, 2 = moderator, 3 = admin user" 
    })
    permissions: number;

    @Column("timestamp with time zone", { default: () => "CURRENT_TIMESTAMP", nullable: false, })
    creation_timestamp: Date;
}