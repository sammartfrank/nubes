import Link from 'next/link';

import { AuthButton } from './AuthButton';
import { User } from '@supabase/supabase-js';
import { WiCloudy } from 'react-icons/wi';
import { ADMIN_ROLE } from '@/utils/constants';
import { NavbarConfig } from '@/custom.types';

export const Navbar = async ({
  user,
  config,
}: {
  user: User | null;
  config: NavbarConfig;
}) => {
  const links =
    user?.role === ADMIN_ROLE
      ? config.admin
      : user
      ? config.authenticated
      : config.loggedOut;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 border-b border-zinc-900">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <WiCloudy size={50} />
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {links.map(({ href, text }) => (
            <Link
              key={href}
              href={href}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              {text}
            </Link>
          ))}
        </div>
        <>
          <span className="dark:text-white text-zinc-50 ml-4 cursor-pointer">
            {user && <AuthButton />}
          </span>
        </>
      </div>
    </nav>
  );
};
