'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { AuthError } from '@supabase/supabase-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DASHBOARD_URL } from '@/utils/constants';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error);
      toast.error('Registro fallido!');
    } else {
      toast.success('Registro Exitoso!');
      router.refresh();
      router.replace(DASHBOARD_URL);
    }
    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-900 text-white">
      <form
        onSubmit={handleSignUp}
        className="dark:bg-zinc-700 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight dark:bg-zinc-700 dark:text-white bg-zinc-900 focus:outline-none focus:shadow-outline"
        />
        {/* TODO:Improve this I dont need their passwords, we could switch to Google or another provider */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none dark:bg-zinc-700 dark:text-white bg-zinc-900 focus:shadow-outline mt-4"
        />
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            disabled={submitting}
            className="bg-gradient-to-r from-zinc-500 to-zinc-600 hover:from-zinc-600 hover:to-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Guardando tu Usuario...' : 'Registrarse'}
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-xs italic">{error.message}</p>
        )}
      </form>
      <ToastContainer theme="dark" />
    </div>
  );
};
