import { Users } from '@/custom.types';

export const UsersList = ({ users }: { users: Users[] }) => {
  if (!users) return null;
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.email} className="flex flex-row justify-start">
            <div className="flex flex-row ">
              <p>{user.id}</p>
              <p>{user.email}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
