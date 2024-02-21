import {
  Entity, Column, OneToOne, JoinColumn, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { Users } from './Users';
import { People } from './People';
import { Things } from './Things';

@Entity()
export class Favorites {
  @ManyToOne(() => Things, (thing) => thing.id, {
    primary: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @PrimaryColumn('uuid', { nullable: false })
    things_id: string;

  @ManyToOne(() => People, (person) => person.id, {
    primary: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @PrimaryColumn('uuid', { nullable: false })
    people_id: string;

  @OneToOne(() => Users, (user) => user.id, {
    cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
    users_id: string;

  @Column('timestamp with time zone', { default: () => 'CURRENT_TIMESTAMP', nullable: false })
    added_timestamp: Date;
}
