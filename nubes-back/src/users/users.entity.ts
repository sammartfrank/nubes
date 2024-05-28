import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Payment, Bookings, BookingsConfirmed } from 'src/entities';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;

  @OneToMany(() => Bookings, (booking) => booking.user)
  bookings: Bookings[];

  @OneToMany(() => Payment, (payment) => payment.user_id)
  payments: Payment[];

  @OneToMany(
    () => BookingsConfirmed,
    (booking_confirmed) => booking_confirmed.user_id,
  )
  bookings_confirmed: BookingsConfirmed[];
}
