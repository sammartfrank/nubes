'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Bookings } from '@/custom.types';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from './DataTableColumnHeader';
import { DataTableRowActions } from './DataTableRowActions';

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import { BookingStatusCell } from './BookingStatusCell';

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
];

export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: ArrowDownIcon,
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: ArrowRightIcon,
  },
  {
    label: 'High',
    value: 'high',
    icon: ArrowUpIcon,
  },
];

export const columns: ColumnDef<Bookings>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    size: 100,
    accessorKey: 'booking_name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === row.original.booking_name,
      );

      return (
        <div className="flex flex-grow space-x-2 flex-1">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="w-[200] truncate font-medium">
            {row.getValue('booking_name')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'booking_status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row: { original } }) => <BookingStatusCell row={original} />,
  },
  {
    accessorKey: 'booking_date',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => <div>{row.getValue('booking_date')}</div>,
  },
  {
    accessorKey: 'booking_time',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    cell: ({ row }) => <div>{row.getValue('booking_time')}</div>,
  },
  {
    accessorKey: 'pax',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pax" />
    ),
    cell: ({ row }) => <div>{row.getValue('pax')}</div>,
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
