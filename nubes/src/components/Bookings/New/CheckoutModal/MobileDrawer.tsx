import { Button } from '@/components/ui/button';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { BookingDetail } from './BookingDetail';
import { Bookings, CreateBookingDto } from '@/custom.types';

type DrawerDialog = {
  open: boolean;
  setOpen: (val: boolean) => void;
  terms: string;
  booking: Bookings;
  preferenceCreated: string;
  handleCreateBooking: () => Promise<CreateBookingDto>;
};

export const MobileDrawer = ({
  open,
  setOpen,
  terms,
  booking,
  preferenceCreated,
  handleCreateBooking,
}: DrawerDialog) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Confirmar Reserva</DrawerTitle>
          <DrawerDescription>{terms}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <BookingDetail
            booking={booking}
            preferenceId={preferenceCreated}
            handleCreateBooking={handleCreateBooking}
          />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
