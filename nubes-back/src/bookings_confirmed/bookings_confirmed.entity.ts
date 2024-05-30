import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Bookings, Payment, Users } from '../entities';

@Entity()
export class BookingsConfirmed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  payment_amount: number;

  @ManyToOne(() => Users, (user) => user.bookings_confirmed)
  user: Users;

  @OneToOne(() => Bookings, (booking) => booking.booking_confirmed)
  @JoinColumn()
  booking: Bookings;

  @OneToOne(() => Payment, (payment) => payment.booking_confirmed)
  @JoinColumn()
  payment: Payment;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
