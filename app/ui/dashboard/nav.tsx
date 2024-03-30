'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];
import { clsx } from 'clsx';

export default function Nav() {
  const pathName = usePathname();
  console.log('🚀 ~ file: nav.tsx:21 ~ Nav ~ pathName:', pathName);
  return (
    <div className="flex justify-between rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 p-5 font-semibold uppercase text-white">
      {links.map((obj) => {
        return (
          <div
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium	 text-black hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === obj.href,
              },
            )}
            key={obj.name}
          >
            <Link href={obj.href}>{obj.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
