import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Things {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column('text', { unique: true, nullable: false })
    name: string;

  @Column('timestamp with time zone', { default: () => 'CURRENT_TIMESTAMP', nullable: false })
    added_timestamp: Date;
}
