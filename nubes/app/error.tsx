'use client';
import { ErrorBoundary } from '@/src/components/Molecules/Error/ErrorBoundary';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorBoundary error={error} reset={reset} />;
}
