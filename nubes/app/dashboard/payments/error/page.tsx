import { DASHBOARD_URL } from '@/utils/constants';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function PaymentsErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative p-8 bg-white shadow-md rounded-lg w-1/2">
        <div className="flex flex-row gap-2 items-center text-red-500 mb-6">
          <FaExclamationTriangle size={24} />
          <h1 className="text-4xl font-bold text-left">Payment Error</h1>
        </div>
        <p className="text-gray-600 mb-6">
          Hubo un problema al procesar su pago. Puede intentar pagar de nuevo
          a través de la tabla de reservas en el Panel de Control. Si elige no hacerlo, el
          pago se cancelará automáticamente después de 5 minutos.
        </p>
        <div className="flex justify-start">
          <Link href={DASHBOARD_URL} passHref>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Ir al Panel de Reservas
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
