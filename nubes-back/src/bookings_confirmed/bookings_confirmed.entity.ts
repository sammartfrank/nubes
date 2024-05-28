import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { Bookings, Users, Payment } from '../entities';

@Entity('bookings_confirmed')
export class BookingsConfirmed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Bookings, (booking) => booking.id)
  booking: Bookings;
  @Column('uuid')
  booking_id: string;

  @OneToOne(() => Payment, (payment) => payment.id)
  payment: Payment;

  @Column('uuid')
  payment_id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  payment_amount: number;

  @OneToOne(() => Users, (user) => user.id)
  user: Users;

  @Column('uuid')
  user_id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
