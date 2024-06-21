import { UserOutlined as UserIcon } from '@ant-design/icons';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
  if (noTables) return null;

  return (
    <div className="flex justify-around items-center p-2 text-foreground h-[80px] border border-border rounded-lg">
      <label htmlFor="pax" className="text-lg font-bold">
        Número de Comensales
      </label>
      <div className="flex">
        <Select onValueChange={(value) => handleSelectedPax(Number(value))}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Elegir cantidad de Personas" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup
              onChange={(value) => {
                console.log('handleSelectedPax', value);
              }}
            >
              <SelectLabel>Mesa Familiar</SelectLabel>
              {[...Array(tableCapacity)].map((_, i) => (
                <SelectItem
                  value={String(i + 1)}
                  key={`pax-#${i + 1}`}
                  onClick={() => handleSelectedPax(i + 1)}
                >
                  {i + 1}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
