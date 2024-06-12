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
  selectedTableType: TableTypeEnum;
  handleSelectedTableType: (tableType: TableTypeEnum) => void;
  noWindowsTablesAvailable: boolean;
  noHallTablesAvailable: boolean;
}) => {
  const className =
    'flex justify-center w-full hover:bg-primary hover:text-white p-4 rounded-md cursor-pointer';

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-3 items-center py-2 text-foreground">
      {noWindowsTablesAvailable ? (
        <DisabledButton />
      ) : (
        <div
          onClick={() => handleSelectedTableType(TableTypeEnum.W)}
          className={
            selectedTableType === TableTypeEnum.W ? className : className
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
            selectedTableType === TableTypeEnum.H ? className : className
          }
        >
          Pasillo
        </div>
      )}
    </div>
  );
};
