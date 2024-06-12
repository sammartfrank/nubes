'use client';

import { createClient } from '@/utils/supabase/client';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { variables } from './i18n';

const redirectUrl = process.env.NEXT_PUBLIC_AUTH_URL;

export const AuthComponent = () => {
  const supabase = createClient();
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={['google']}
      redirectTo={redirectUrl}
      onlyThirdPartyProviders
      localization={variables}
      view="sign_up"
    />
  );
};
