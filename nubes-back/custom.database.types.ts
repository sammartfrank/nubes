import { Database, Enums, Tables } from 'database.types';

export type Booking = Tables<'bookings'>;
export type User = Tables<'users'>;

export type BookingStatus = Enums<'bookings_status_enum'>;

export type BookingInsert = Database['public']['Tables']['bookings']['Insert'];
export type BookingUpdate = Database['public']['Tables']['bookings']['Update'];

export type UserInsert = Database['public']['Tables']['users']['Insert'];
export type UserUpdate = Database['public']['Tables']['users']['Update'];

export enum TableStatusEnum {
  AVAILABLE = 'AVAILABLE',
  BOOKED = 'BOOKED',
}

export enum BookingStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
}

export enum PaymentStatusEnum {
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  CANCELLED = 'cancelled',
}

export enum PaymentMethodEnum {
  CARD = 'card',
}
