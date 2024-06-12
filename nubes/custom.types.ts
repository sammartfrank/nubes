import { Tables as Table, TablesInsert, Enums } from './database.types';

export type NavbarConfig = {
  admin: { href: string; text: string }[];
  authenticated: { href: string; text: string }[];
  loggedOut: { href: string; text: string }[];
};

export type Tables = Table<'tables'>;

export type TableStatuses = Enums<'tables_table_status_enum'>;
export type TableTypes = Enums<'tables_table_type_enum'>;

export enum TableStatusEnum {
  BOOKED = 'BOOKED',
  AVAILABLE = 'AVAILABLE',
}

export enum TableTypeEnum {
  W = 'Window',
  H = 'Hall',
}

export enum BookingStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
}

export type Bookings = Table<'bookings'>;
export type BookingsInsert = TablesInsert<'bookings'>;
export type BookingStatus = Enums<'bookings_booking_status_enum'>;

export type Users = Table<'users'>;
export type UsersInsert = TablesInsert<'users'>;
