import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

import { BookingStatus, BookingStatusEnum } from '@/custom.database.types';

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

  @Column('uuid')
  user_id: string;

  @ManyToOne(() => Tables)
  table: Tables;

  @OneToOne(
    () => BookingsConfirmed,
    (booking_confirmed) => booking_confirmed.booking,
  )
  booking_confirmed: BookingsConfirmed;

  @Column('uuid')
  booking_confirmed_id: string;

  @OneToOne(() => Payment, (payment) => payment.booking_id)
  payment: Payment;

  @Column({ type: 'uuid' })
  payment_id: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
