import { AuthComponent } from '@/src/components/AuthComponent';

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8 bg-background h-[calc(100vh-250px)]">
      <AuthComponent />
    </main>
  );
}
