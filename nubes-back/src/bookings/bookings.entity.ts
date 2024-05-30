import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

import { BookingStatus, BookingStatusEnum } from '../../custom.database.types';

import { BookingsConfirmed, Payment, Tables, Users } from '../entities';

@Entity('bookings')
export class Bookings {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  booking_date: Date;

  @Column({ type: 'time without time zone' })
  booking_time: string;

  @Column('text')
  booking_name: string;

  @Column('text')
  booking_details: string;

  @Column({
    type: 'enum',
    enum: BookingStatusEnum,
    default: BookingStatusEnum.PENDING,
  })
  booking_status: BookingStatus;

  @Column({ type: 'int' })
  pax: number;

  @ManyToOne(() => Users, (user) => user.bookings)
  user: Users;

  @ManyToOne(() => Tables)
  table: Tables;

  @OneToOne(() => Payment, (payment) => payment.booking)
  payment: Payment;

  @OneToOne(
    () => BookingsConfirmed,
    (booking_confirmed) => booking_confirmed.booking,
  )
  booking_confirmed: BookingsConfirmed;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
