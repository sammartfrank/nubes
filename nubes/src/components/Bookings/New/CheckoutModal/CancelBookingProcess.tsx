import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Bookings } from '@/custom.types';
import { Spinner } from '@/src/components/Loader';

type CancelProcessProps = {
  setCancelModalOpen: (val: boolean) => void;
  cancelModalOpen: boolean;
  handleCancelBooking: (bookingId: string) => void;
  bookingDetails?: Bookings;
  isCancelling: boolean;
};

export const CancelProcess = ({
  cancelModalOpen,
  setCancelModalOpen,
  handleCancelBooking,
  bookingDetails,
  isCancelling,
}: CancelProcessProps) => {
  if (isCancelling) return <Spinner />;

  return (
    <Dialog open={cancelModalOpen} onOpenChange={setCancelModalOpen}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>
            ¿Estás seguro que quieres cancelar la Reserva?
          </DialogTitle>
          <DialogDescription>
            Al Cancelar la reserva se liberará el espacio para otro usuario. Y
            no podras recuperar la reserva. Recibiras un email con mas
            instrucciones.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                type="button"
                className="px-6 py-2 text-sm font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600"
                onClick={() => setCancelModalOpen(false)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="px-6 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary-dark"
                onClick={() => handleCancelBooking(bookingDetails?.id!)}
              >
                Continuar
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
