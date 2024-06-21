import { Bookings, BookingStatus, BookingStatusEnum } from '@/custom.types';
import {
  CheckCircledIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons';

import '@github/relative-time-element';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export const statuses: Array<{
  value: BookingStatus;
  label: string;
  icon?: any;
  className: string;
}> = [
  {
    value: BookingStatusEnum.PENDING,
    label: 'Pendiente',
    icon: StopwatchIcon,
    className: 'text-yellow-500 bg-yellow-100',
  },
  {
    value: BookingStatusEnum.APPROVED,
    label: 'Aprobada',
    icon: CheckCircledIcon,
    className: 'text-green-500 bg-green-100',
  },
  {
    value: BookingStatusEnum.CANCELLED,
    label: 'Cancelada',
    icon: CrossCircledIcon,
    className: 'text-red-500 bg-red-100',
  },
];

export const BookingStatusCell = ({ row }: { row: Bookings }) => {
  const status = statuses.find((status) => status.value === row.booking_status);
  if (!status) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-center ${status.className} text-sm font-bold p-2 rounded-lg w-40`}
    >
      <HoverCard>
        <HoverCardTrigger className="flex flex-row gap-1 justify-center items-center cursor-pointer">
          {status.icon && <status.icon className="h-6 w-6" />}
          <span className="text-sm">{status.label}</span>
        </HoverCardTrigger>
        <HoverCardContent>
          Un email fue enviado a tu casilla para confirmar{' '}
          <relative-time datetime={row.created_at} lang="es">
            {row.created_at}
          </relative-time>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
