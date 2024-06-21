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

  @Column()
  collection_id: string;

  @Column()
  payment_mepa_id: string;

  @Column()
  merchant_order_id: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  collection_status: string;

  @Column()
  status_detail: string;

  @Column()
  external_reference: string;

  @Column()
  payment_date: Date;

  @Column()
  external_status: string;

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

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}
