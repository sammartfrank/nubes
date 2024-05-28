import { TableType } from '@/custom.types';

const DisabledButton = () => {
  return (
    <div className="bg-zinc-600 w-[385px] text-gray-200 border p-4 rounded border-zinc-600 cursor-not-allowed">
      No disponible
    </div>
  );
};

export const TableTypePicker = ({
  selectedTableType,
  handleSelectedTableType,
  noWindowsTablesAvailable,
  noHallTablesAvailable,
}: {
  selectedTableType: TableType;
  handleSelectedTableType: (tableType: TableType) => void;
  noWindowsTablesAvailable: boolean;
  noHallTablesAvailable: boolean;
}) => {
  const className =
    'flex justify-center w-[385px] hover:bg-zinc-600 p-4 rounded-md cursor-pointer';
  const selectedTableTypeClassName = ' border border-gray-800 bg-zinc-800';

  return (
    <div className="flex justify-between gap-3 items-center py-2 text-white">
      {noWindowsTablesAvailable ? (
        <DisabledButton />
      ) : (
        <div
          onClick={() => handleSelectedTableType(TableType.W)}
          className={
            selectedTableType === TableType.W
              ? className + selectedTableTypeClassName
              : className
          }
        >
          Ventana
        </div>
      )}
      {noHallTablesAvailable ? (
        <DisabledButton />
      ) : (
        <div
          onClick={() => handleSelectedTableType(TableType.H)}
          className={
            selectedTableType === TableType.H
              ? className + ' border border-gray-800 bg-zinc-800'
              : className
          }
        >
          Pasillo
        </div>
      )}
    </div>
  );
};
