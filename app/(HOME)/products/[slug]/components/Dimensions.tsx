import Table from "@/components/Table";
import { TableCell, TableRow } from "@/components/ui/table";

const Dimensions = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Dimensions</h2>
      <div className="pl-3">
        <Table columns={columns} data={data} renderRows={renderRows} />
      </div>
    </div>
  );
};

const data = [
  { metric: "Length", value: "20 cm" },
  { metric: "Width", value: "15 cm" },
  { metric: "Height", value: "10 cm" },
  { metric: "Net Weight", value: "1.5 kg" },
  { metric: "Boxed Weight", value: "1.9 kg" },
];

const renderRows = (data: { metric: string; value: string }) => {
  return (
    <TableRow key={data.metric} className="odd:bg-muted/50">
      <TableCell>{data.metric}</TableCell>
      <TableCell className="text-right">{data.value}</TableCell>
    </TableRow>
  );
};

const columns = [
  { label: "Metric", className: "" },
  { label: "Value", className: "text-right" },
];

export default Dimensions;
