import { NextPage } from 'next';
import { SignUpForm } from '@/src/components/SignUp';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { DASHBOARD_URL, LOGIN_URL, SIGNUP_URL } from '@/utils/constants';
import { revalidatePath } from 'next/cache';

const SignUpPage: NextPage = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    revalidatePath(SIGNUP_URL, 'page');
    redirect(DASHBOARD_URL);
  }
  return <SignUpForm />;
};

export default SignUpPage;
