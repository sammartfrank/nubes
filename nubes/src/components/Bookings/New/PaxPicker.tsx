import { UserOutlined as UserIcon } from '@ant-design/icons';

export const PaxPicker = ({
  pax,
  handleSelectedPax,
  tableCapacity,
  noTables,
}: {
  pax: number;
  handleSelectedPax: (numPersons: number) => void;
  tableCapacity: number;
  noTables: boolean;
}) => {
  const handlePaxClick = (num: number) => {
    handleSelectedPax(num);
  };
  if (noTables) return null;
  return (
    <div className="flex justify-around items-center p-2 text-foreground h-[80px] border border-border rounded-lg">
      <label htmlFor="pax" className="text-lg font-bold">
        Número de Comensales
      </label>
      <div className="flex">
        {[...Array(tableCapacity)].map((_, i) => (
          <UserIcon
            key={i}
            className={`h-6 w-6 ${i < pax ? 'text-primary' : 'text-zinc-300'}`}
            onClick={() => handlePaxClick(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};
