import { Users } from '@/custom.types';
import { UsersList } from '@/src/components/Users/List';

export const AdminUsersSection = ({
  users,
  isLoadingUsers,
}: {
  users?: Users[];
  isLoadingUsers: boolean;
}) => {
  if (isLoadingUsers) return <p>Loading...</p>;
  if (!users) return null;
  return (
    <section className="px-4 text-white">
      <header className="flex flex-col gap-4 align-middle justify-center ">
        <h2 className="text-4xl m-0">Usuarios Registrados</h2>
        <p className="m-0">Total: {users.length}</p>
      </header>
      <div className="flex justify-between gap-10 mb-4">
        <input
          type="text"
          placeholder="Filter"
          className="p-2 rounded-md w-96"
        />
        <div className="flex space-x-4">
          <button className="p-2 bg-zinc-500 text-white rounded-md hover:bg-zinc-700">
            Bulk Edit
          </button>
          <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-700">
            Bulk Delete
          </button>
        </div>
      </div>
      <UsersList users={users} />
    </section>
  );
};
