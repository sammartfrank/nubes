import { Bookings, BookingStatus } from '@/custom.types';
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
    value: 'pending',
    label: 'Pending',
    icon: StopwatchIcon,
    className: 'text-yellow-500 bg-yellow-100',
  },
  {
    value: 'approved',
    label: 'Approved',
    icon: CheckCircledIcon,
    className: 'text-green-500 bg-green-100',
  },
  {
    value: 'cancelled',
    label: 'Canceled',
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
      className={`flex items-center justify-center ${status.className} text-sm font-bold px-4 py-2 rounded-full w-40`}
    >
      {status.icon && <status.icon className="mr-2 h-4 w-4" />}

      <HoverCard>
        <HoverCardTrigger className="underline cursor-pointer">
          {status.label}
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
