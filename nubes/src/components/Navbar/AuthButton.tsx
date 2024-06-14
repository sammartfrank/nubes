import { HOME_URL } from '@/utils/constants';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const AuthButton = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const signOut = async () => {
    'use server';
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect(HOME_URL);
  };

  return (
    <div className="flex items-center gap-4 text-primary">
      <div className="hidden md:flex">
        Hola, {user?.user_metadata.full_name}!
      </div>
      <form action={signOut}>
        <button className="p-1 lg:p-2 border border-border shadow-sm rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-transparent">
          Cerrar sesión
        </button>
      </form>
    </div>
  );
};
