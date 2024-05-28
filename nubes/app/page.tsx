import Link from 'next/link';
import { redirect } from 'next/navigation';
import Logo from '@/public/cwo.png';
import Image from 'next/image';

import { createClient } from '@/utils/supabase/server';
import { DASHBOARD_URL, LOGIN_URL, SIGNUP_URL } from '@/utils/constants';
import { homeConfig } from '@/configs/appConfig';

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect(DASHBOARD_URL);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-900">
      <div className="flex flex-col items-center justify-center space-y-4 flex-grow">
        <Image
          src={Logo}
          alt="Logo"
          className="object-fit h-56 w-full"
          width={200}
          height={200}
        />
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Link href={SIGNUP_URL}>
            <button className="bg-gradient-to-r from-zinc-500 to-zinc-600 hover:from-zinc-600 hover:to-zinc-700 text-white font-bold py-2 px-4 rounded">
              {homeConfig.signupText}
            </button>
          </Link>
          <Link href={LOGIN_URL}>
            <button className="bg-gradient-to-r from-zinc-500 to-zinc-600 hover:from-zinc-600 hover:to-zinc-700 text-white font-bold py-2 px-4 rounded">
              {homeConfig.loginText}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
