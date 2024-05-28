import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <main className="relative z-10">{children}</main>
    </div>
  );
}
