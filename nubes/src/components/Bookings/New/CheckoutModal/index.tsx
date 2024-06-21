import { Bookings } from '@/custom.types';
import { DesktopDialog } from './DesktopDialog';
import { useMediaQuery } from '@/src/hooks';
import { MobileDrawer } from './MobileDrawer';
import { appTermsConfig } from '@/configs/appConfig';
import { CreateBookingDto } from '../../../../../../nubes-back/src/bookings/dto/create-bookings.dto';

export type CheckoutModalProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
  booking: Bookings;
  preferenceCreated: string;
  handleCreateBooking: () => Promise<CreateBookingDto>;
};

export const CheckoutDesktopModal = ({
  open,
  setOpen,
  booking,
  preferenceCreated,
  handleCreateBooking,
}: CheckoutModalProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isDesktop)
    return (
      <DesktopDialog
        booking={booking}
        open={open}
        setOpen={setOpen}
        terms={appTermsConfig.termsText}
        preferenceCreated={preferenceCreated}
        handleCreateBooking={handleCreateBooking}
      />
    );

  return (
    <MobileDrawer
      open={open}
      setOpen={setOpen}
      booking={booking}
      terms={appTermsConfig.termsText}
      preferenceCreated={preferenceCreated}
      handleCreateBooking={handleCreateBooking}
    />
  );
};
