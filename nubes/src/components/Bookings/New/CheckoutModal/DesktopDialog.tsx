import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { BookingDetail } from './BookingDetail';
import { Bookings, CreateBookingDto } from '@/custom.types';


type DesktopDialog = {
  open: boolean;
  setOpen: (val: boolean) => void;
  terms: string;
  booking: Bookings;
  preferenceCreated: string;
  handleCreateBooking: () => Promise<CreateBookingDto>;
};

export const DesktopDialog = ({
  open,
  setOpen,
  terms,
  booking,
  preferenceCreated,
  handleCreateBooking,
}: DesktopDialog) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Confirmar la reserva</DialogTitle>
          <DialogDescription className="text-sm">{terms}</DialogDescription>
        </DialogHeader>
        <BookingDetail
          booking={booking}
          preferenceId={preferenceCreated}
          handleCreateBooking={handleCreateBooking}
        />
      </DialogContent>
    </Dialog>
  );
};
