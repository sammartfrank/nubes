import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const AuthButton = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    'use server';

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/login');
  };

  return (
    <div className="flex items-center gap-4">
      Hey, {user?.email}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Cerrar sesión
        </button>
      </form>
    </div>
  );
};
