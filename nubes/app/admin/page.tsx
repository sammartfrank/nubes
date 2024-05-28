import { AdminPanel } from '@/src/views/admin/panel';
import { ADMIN_ROLE, DASHBOARD_URL, LOGIN_URL } from '@/utils/constants';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const supabase = createClient();

  const [
    {
      data: { user },
    },
    {
      data: { session },
    },
  ] = await Promise.all([supabase.auth.getUser(), supabase.auth.getSession()]);

  if (!user || !session) {
    return redirect(LOGIN_URL);
  }

  const isAdmin = user.role === ADMIN_ROLE;

  if (!isAdmin) {
    return redirect(DASHBOARD_URL);
  }

  return <AdminPanel access_token={session.access_token} />;
}
