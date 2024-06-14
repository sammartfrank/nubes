import Link from 'next/link';
import { WiCloudy } from 'react-icons/wi';

import { AuthButton } from './AuthButton';
import { HOME_URL } from '@/utils/constants';

export const Navbar = async ({
  links,
}: {
  links: {
    href: string;
    text: string;
  }[];
}) => {
  return (
    <nav
      className="container flex items-center justify-between flex-wrap p-2"
      style={{ background: 'none' }}
    >
      <div className="flex items-center gap-2 flex-shrink-0 text-foreground mr-6">
        <Link
          className="font-semibold text-xl tracking-tight hover:text-zinc-500 flex flex-row gap-2"
          href={HOME_URL}
        >
          <WiCloudy size={30} />
          Las Nubes
        </Link>
      </div>
      <div className="flex flex-row items-center flex-grow ">
        <div className="text-sm flex-grow flex flex-row  items-center justify-between">
          {links.map(({ href, text }) => (
            <Link
              key={href}
              href={href}
              className="block lg:inline-block text-foreground hover:text-zinc-500 mr-4"
            >
              {text}
            </Link>
          ))}
        </div>
        <span className="dark:text-foreground text-muted ml-4 cursor-pointer">
          <AuthButton />
        </span>
      </div>
    </nav>
  );
};
