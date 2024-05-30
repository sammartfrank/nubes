import {
  PaymentMethodEnum,
  PaymentStatusEnum,
} from '../../custom.database.types';

import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Bookings, BookingsConfirmed, Users } from '../entities';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({
    type: 'enum',
    enum: PaymentMethodEnum,
    default: PaymentMethodEnum.CARD,
  })
  payment_method: PaymentMethodEnum;

  @Column({
    type: 'enum',
    enum: PaymentStatusEnum,
    default: PaymentStatusEnum.PENDING,
  })
  payment_status: PaymentStatusEnum;

  @ManyToOne(() => Users, (user) => user.payments)
  user: Users;

  @OneToOne(() => Bookings, (booking) => booking.payment)
  @JoinColumn()
  booking: Bookings;

  @OneToOne(
    () => BookingsConfirmed,
    (booking_confirmed) => booking_confirmed.payment,
  )
  booking_confirmed: BookingsConfirmed;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
