import { useUsersQuery } from '@/src/hooks';
import Link from 'next/link';

export default async function UsersPage() {
  const { data } = useUsersQuery();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4 text-white">
        {data?.map((user) => (
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
