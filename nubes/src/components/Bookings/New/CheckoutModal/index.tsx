import { useMediaQuery } from '@/src/hooks/useMediaQuery';
import { Bookings } from '@/custom.types';
import { DesktopDialog } from './DesktopDialog';
import { MobileDrawer } from './MobileDrawer';

export type CheckoutModalProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
  terms: string;
  handleSubmit: () => void;
  booking: Bookings;
};

export const CheckoutModal = ({
  open,
  setOpen,
  handleSubmit,
  booking,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
  handleSubmit: () => void;
  booking: Bookings;
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const TERMS = `Al realizar la reserva, aceptas los términos y condiciones de nuestro establecimiento. Además, al efectuar el pago, confirmas que estás de acuerdo con nuestra política de cancelación, la cual no incluye reembolsos.`;

  if (isDesktop)
    return (
      <DesktopDialog
        open={open}
        setOpen={setOpen}
        handleSubmit={handleSubmit}
        booking={booking}
        terms={TERMS}
      />
    );

  return (
    <MobileDrawer
      open={open}
      setOpen={setOpen}
      handleSubmit={handleSubmit}
      booking={booking}
      terms={TERMS}
    />
  );
};
