'use client';
import '@github/relative-time-element';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '@radix-ui/react-icons';

import { useState, useMemo, Fragment } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from './DataTableColumnHeader';
import { Badge } from '@/components/ui/badge';
import { BookingStatusCell } from './BookingStatusCell';
import { DataTableRowActions } from './DataTableRowActions';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { DataTablePagination } from './DataTablePagination';
import { Bookings } from '@/custom.types';

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

export const BookingsTable = ({
  bookings,
  handleOnViewDetails,
  handleCancelOnDropDown,
}: {
  bookings: Bookings[];
  handleOnViewDetails: (val: Bookings) => void;
  handleCancelOnDropDown: (val: Bookings) => void;
}) => {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns: ColumnDef<Bookings>[] = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
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
        accessorKey: 'booking_name',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Nombre" />
        ),
        cell: ({ row }) => {
          const label = labels.find(
            (label) => label.value === row.original.booking_name,
          );

          return (
            <div className="flex flex-grow space-x-2 flex-1">
              {label && <Badge variant="outline">{label.label}</Badge>}
              <span className="truncate font-medium">
                {row.getValue('booking_name')}
              </span>
            </div>
          );
        },
      },
      {
        accessorKey: 'booking_status',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Estado" />
        ),
        cell: ({ row: { original } }) => <BookingStatusCell row={original} />,
      },
      {
        accessorKey: 'booking_date',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Fecha" />
        ),
        cell: ({ row }) => {
          const formatedDate = new Date(
            row.getValue('booking_date'),
          ).toLocaleDateString('es-AR');

          return <div>{formatedDate}</div>;
        },
      },
      {
        accessorKey: 'booking_time',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Horario" />
        ),
        cell: ({ row }) => <div>{row.getValue('booking_time')}</div>,
      },
      {
        accessorKey: 'pax',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Pasajeros" />
        ),
        cell: ({ row }) => <div>{row.getValue('pax')}</div>,
      },
      {
        accessorKey: 'created_at',
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Creado el" />
        ),
        cell: ({ row }) => {
          return (
            <relative-time datetime={row.getValue('created_at')} lang="es">
              {row.getValue('created_at')}
            </relative-time>
          );
        },
      },
      {
        id: 'actions',
        cell: ({ row }) => (
          <DataTableRowActions
            row={row.original}
            handleOnViewDetails={handleOnViewDetails}
            handleCancelOnDropDown={handleCancelOnDropDown}
          />
        ),
      },
    ],
    [handleCancelOnDropDown, handleOnViewDetails],
  );
  const table = useReactTable({
    data: bookings,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <Fragment>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </Fragment>
  );
};