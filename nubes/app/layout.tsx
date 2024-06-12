import { Lato } from 'next/font/google';
import { Navbar } from '@/src/components/Navbar';
import { createClient } from '@/utils/supabase/server';
import { Providers } from './providers';

import './globals.css';
import { navbarConfig } from '@/configs/appConfig';
import { ADMIN_ROLE } from '@/utils/constants';

const lato = Lato({ weight: '400', subsets: ['latin'] });

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Las Nubes café | Un producto de Manantiales Apart Hotels.',
  description:
    'Una manera simple y rapida para reservar tu mesa en Las Nubes café',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const links =
    user?.role === ADMIN_ROLE
      ? navbarConfig.admin
      : user
      ? navbarConfig.authenticated
      : navbarConfig.loggedOut;

  return (
    <html lang="es">
      <body className={lato.className}>
        <Navbar links={links} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
