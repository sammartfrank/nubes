import { deriveErrorState } from './utils';

export const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const { status, header, message, home } = deriveErrorState(error);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <header className="mb-6">
            {status && (
              <h1 className="text-2xl font-semibold text-gray-900">{status}</h1>
            )}
            <h4 className="text-xl text-gray-600">{header}</h4>
          </header>

          <p className="text-gray-500">{message}</p>

          {home && (
            <button
              className="mt-8 bg-gradient-to-r from-zinc-500 to-zinc-600 hover:from-zinc-600 hover:to-zinc-700 text-white font-semibold px-6 py-3 rounded-md"
              onClick={() => reset()}
            >
              Go to home
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
