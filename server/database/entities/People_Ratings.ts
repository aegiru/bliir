import {
  Entity, Column, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { Users } from './Users';
import { People } from './People';

@Entity()
export class People_Ratings {
  @ManyToOne(() => People, (person) => person.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @PrimaryColumn('uuid', { nullable: false })
    people_id: string;

  @ManyToOne(() => Users, (user) => user.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @PrimaryColumn('uuid', { nullable: false })
    users_id: string;

  @Column('smallint', { nullable: false, range: [0, 10] })
    rating: number;

  @Column('timestamp with time zone', { default: () => 'CURRENT_TIMESTAMP', nullable: false })
    added_timestamp: Date;
}
