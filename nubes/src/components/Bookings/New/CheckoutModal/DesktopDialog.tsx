import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckoutModalProps } from '.';
import { BookingDetail } from './BookingDetail';

export const DesktopDialog = ({
  open,
  setOpen,
  terms,
  booking,
  handleSubmit,
}: CheckoutModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Confirmar Reserva</DialogTitle>
          <DialogDescription>{terms}</DialogDescription>
        </DialogHeader>
        <BookingDetail booking={booking} handleSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};
