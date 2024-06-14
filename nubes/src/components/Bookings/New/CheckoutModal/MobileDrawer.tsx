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
import { CheckoutModalProps } from '.';
import { BookingDetail } from './BookingDetail';

export const MobileDrawer = ({
  open,
  setOpen,
  terms,
  handleSubmit,
  booking,
}: CheckoutModalProps) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Confirmar Reserva</DrawerTitle>
          <DrawerDescription>{terms}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <BookingDetail booking={booking} handleSubmit={handleSubmit} />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
