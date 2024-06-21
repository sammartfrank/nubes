import { TableTypeEnum } from '@/custom.types';

const DisabledButton = () => {
  return (
    <div className="bg-primary w-full text-white border p-4 rounded border-primary cursor-not-allowed">
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
  selectedTableType: TableTypeEnum | null;
  handleSelectedTableType: (tableType: TableTypeEnum) => void;
  noWindowsTablesAvailable: boolean;
  noHallTablesAvailable: boolean;
}) => {
  const className =
    'flex justify-center w-full hover:bg-primary hover:text-white p-4 rounded-md cursor-pointer';
  const selectedClassName =
    'flex justify-center w-full border border-border rounded-md bg-zinc-100 text-primary font-bold p-4 cursor-pointer';

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-2 items-center py-2 text-foreground">
      {noWindowsTablesAvailable ? (
        <DisabledButton />
      ) : (
        <div
          onClick={() => handleSelectedTableType(TableTypeEnum.W)}
          className={
            selectedTableType === TableTypeEnum.W
              ? selectedClassName
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
          onClick={() => handleSelectedTableType(TableTypeEnum.H)}
          className={
            selectedTableType === TableTypeEnum.H
              ? selectedClassName
              : className
          }
        >
          Salón
        </div>
      )}
    </div>
  );
};
