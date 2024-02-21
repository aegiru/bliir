import {
  Entity, Column, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { Users } from './Users';

@Entity()
export class Sessions {
  @ManyToOne(() => Users, (user) => user.id, {
    primary: false,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
    users_id: string;

  @PrimaryColumn('text', { unique: true, nullable: false })
    session_id: string;

  @Column('timestamp with time zone', { default: () => 'CURRENT_TIMESTAMP', nullable: false })
    start_timestamp: Date;

  @Column('timestamp with time zone', { nullable: true })
    expiration_timestamp: Date;

  @Column('text', { nullable: false })
    access_token: string;

  @Column('text', { nullable: false })
    csrf_token: string;

  @Column('boolean', { default: true, nullable: false })
    is_active: boolean;

  @Column('text', { nullable: false })
    ip_address: string;
}
