import { LOGIN_URL } from '@/utils/constants';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { dashboardConfig } from '@/configs/appConfig';

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(LOGIN_URL);
  }

  const {
    newBookingUrl,
    dashboardTitle,
    dashboardSubtitle,
    dashboardDescription,
    dashboardCTA,
  } = dashboardConfig;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col space-y-4 text-center dark:text-white text-zinc-50">
        <h1 className="font-bold mb-2 text-4xl">{dashboardTitle}</h1>
        <p>{dashboardSubtitle}</p>
        <p>{dashboardDescription}</p>
        <Link
          href={newBookingUrl}
          className="p-4 border border-gray-200 shadow-sm rounded-lg hover:bg-black hover:text-white hover:border-transparent"
        >
          {dashboardCTA}
        </Link>
      </div>
    </div>
  );
}
