import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Bookings, BookingsConfirmed, Payment } from '../entities';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Payment[];

  @OneToMany(() => Bookings, (booking) => booking.user)
  bookings: Bookings[];

  @OneToMany(
    () => BookingsConfirmed,
    (booking_confirmed) => booking_confirmed.user,
  )
  bookings_confirmed: BookingsConfirmed[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
