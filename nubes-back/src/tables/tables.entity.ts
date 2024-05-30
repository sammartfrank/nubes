import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Bookings } from '../../src/bookings/bookings.entity';

export enum TableType {
  W = 'Window',
  H = 'Hall',
}

enum TableStatus {
  BOOKED = 'BOOKED',
  AVAILABLE = 'AVAILABLE',
}

@Entity()
export class Tables {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  table_number: number;

  @Column({
    type: 'enum',
    enum: TableType,
    default: TableType.W,
  })
  table_type: TableType;

  @Column()
  table_capacity: number;

  @Column({
    type: 'enum',
    enum: TableStatus,
    default: TableStatus.AVAILABLE,
  })
  table_status: TableStatus;

  // Working
  @OneToMany(() => Bookings, (booking) => booking.table)
  bookings: Bookings[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
