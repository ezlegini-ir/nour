import {
  Table as MyTable,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Frown } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  columns: { label: string; className?: string }[];
  data: any[];
  renderRows: (item: any, index?: number) => ReactNode;
  noDataMessage?: string;
}

const Table = ({ columns, data, renderRows, noDataMessage }: Props) => {
  return (
    <>
      <MyTable>
        <TableHeader>
          <TableRow className="text-sm text-left">
            {columns.map((column, index) => (
              <TableHead
                key={index}
                className={`text-left ${column.className} h-10 text-muted-foreground`}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.map((data, index) => renderRows(data, index))}
        </TableBody>
      </MyTable>

      {data.length < 1 && (
        <div className="py-20 text-muted-foreground flex flex-col gap-3 justify-center items-center text-sm">
          <Frown
            size={80}
            className="text-muted-foreground"
            strokeWidth={1.5}
          />
          {noDataMessage || "No data available"}
        </div>
      )}
    </>
  );
};

export default Table;
