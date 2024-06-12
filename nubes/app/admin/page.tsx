import { AdminPanel } from '@/src/views/admin/panel';
import { createClient } from '@/utils/supabase/server';

export default async function AdminPage() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  return <AdminPanel session={session!} />;
}
