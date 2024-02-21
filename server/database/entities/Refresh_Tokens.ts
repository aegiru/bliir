import {
  Entity, Column, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { Users } from './Users';

@Entity()
export class Refresh_Tokens {
  @ManyToOne(() => Users, (user) => user.id, {
    primary: false,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
    users_id: string;

  @PrimaryColumn('text', { unique: true, nullable: false })
    refresh_token: string;

  @Column('timestamp with time zone', { default: () => 'CURRENT_TIMESTAMP', nullable: false })
    expiration_timestamp: Date;
}
