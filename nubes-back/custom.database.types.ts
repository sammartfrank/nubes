import { Database, Enums, Tables } from './database.types';

export type Booking = Tables<'bookings'>;
export type User = Tables<'users'>;

export type BookingStatus = Enums<'bookings_booking_status_enum'>;

export type BookingInsert = Database['public']['Tables']['bookings']['Insert'];
export type BookingUpdate = Database['public']['Tables']['bookings']['Update'];

export type UserInsert = Database['public']['Tables']['users']['Insert'];
export type UserUpdate = Database['public']['Tables']['users']['Update'];

export enum TableStatusEnum {
  AVAILABLE = 'AVAILABLE',
  BOOKED = 'BOOKED',
}

export enum TableTypeEnum {
  WINDOW = 'Window',
  HALL = 'Hall',
}

export enum BookingStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
}

export type Payment = Tables<'payment'>;
export type PaymentInsert = Database['public']['Tables']['payment']['Insert'];
export type PaymentMethod = Enums<'payment_payment_method_enum'>;
export type PaymentStatus = Enums<'payment_payment_status_enum'>;

export enum PaymentStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
}

export enum PaymentMethodEnum {
  CARD = 'card',
  MERPAGO = 'merpago',
}
