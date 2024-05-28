import { NextPage } from 'next';
import { LoginForm } from '@/src/components/Login';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { DASHBOARD_URL, LOGIN_URL } from '@/utils/constants';
import { revalidatePath } from 'next/cache';

const LoginPage: NextPage = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    revalidatePath(LOGIN_URL, 'page');
    redirect(DASHBOARD_URL);
  }
  return <LoginForm />;
};

export default LoginPage;
