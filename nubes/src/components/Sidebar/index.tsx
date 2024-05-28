'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linksConfig = [
  { href: '/dashboard/bookings', text: 'Bookings' },
  { href: '/dashboard/users', text: 'Users' },
];

export const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="p-3 space-y-2 overflow-y-auto text-white bg-gray-800 border-r border-zinc-900 w-[150px]">
      <nav className="mt-5 space-y-5">
        {linksConfig.map((link) => (
          <div key={link.href}>
            <Link
              href={link.href}
              className={`flex items-center p-2 text-gray-100 transition-colors rounded-md ${
                path === link.href ? 'bg-zinc-900' : 'hover:bg-gray-700'
              }`}
            >
              {link.text}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};
