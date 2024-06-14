'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Bookings } from '@/custom.types';

export function BookingDetails({
  booking,
  isOpen,
  handleClose,
}: {
  booking?: Bookings;
  isOpen: boolean;
  handleClose: () => void;
}) {
  if (!booking) return null;
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>Detalles</DialogTitle>
          <DialogDescription>
            Aquí están los detalles de la reserva.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-left">
              Nombre
            </Label>
            <span className="text-gray-500">{booking.booking_name}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="bookingDate" className="text-left">
              Fecha de Reserva
            </Label>
            <span className="text-gray-500">{booking.booking_date}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="bookingTime" className="text-left">
              Hora de Reserva
            </Label>
            <span className="text-gray-500">{booking.booking_time}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="bookingStatus" className="text-left">
              Estado de la Reserva
            </Label>
            <span className="text-gray-500">{booking.booking_status}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="createdDate" className="text-left">
              Fecha de Creación
            </Label>
            <span className="text-gray-500">{booking.created_at}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="bookingId" className="text-left">
              ID de Reserva
            </Label>
            <span className="text-gray-500">{booking.id}</span>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
