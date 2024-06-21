import { Tables as Table, Enums } from './database.types';

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

export enum TableType {
  Window = 'Window',
  Hall = 'Hall',
}
export enum BookingStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
}

export type Bookings = Table<'bookings'>;
export type Users = Table<'users'>;
export type Payment = Table<'payment'>;

export enum PaymentMethodEnum {
  CARD = 'card',
}

export enum PaymentStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
}
export type CreateBookingDto = {
  booking_name: string;
  booking_details: string;
  booking_status: BookingStatusEnum;
  booking_date: string;
  booking_time: string;
  pax: number;
  table_type: TableTypeEnum;
  tableId: string;
  userId: string;
};

export type CreatePaymentDto = {
  amount: number;
  payment_date: string;
  external_status: string;
  status_detail: string;
  external_reference: string;
  merchant_order_id: string;
  payment_mepa_id: string;
  collection_id: string;
  collection_status: string;
  bookingId: string;
  userId: string;
  payment_method: PaymentMethodEnum;
  payment_status: PaymentStatusEnum;
};

export type UpdateBookingStatusDto = {
  id: string;
  booking_status: BookingStatusEnum;
};
