import { LOGIN_URL } from '@/utils/constants';
import { createClient } from '@/utils/supabase/server';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function UsersPage() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect(LOGIN_URL);
  }

  const response = await fetch(`${process.env.BACKEND_URL}/users`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  });
  const result = (await response.json()) as User[];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4 text-white">
        {result?.map((user) => (
          <Link
            key={user.id}
            href={`/dashboard/users/${user.id}`}
            className="block p-4 border border-gray-200 shadow-sm rounded-lg text-center"
          >
            <h2 className="font-bold mb-2">{user.email}</h2>
            <div className="h-1 bg-blue-500"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
