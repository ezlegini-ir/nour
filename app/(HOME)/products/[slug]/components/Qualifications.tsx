import Table from "@/components/Table";
import { TableCell, TableRow } from "@/components/ui/table";

const Qualifications = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Qualifications</h2>
      <div className="pl-3">
        <Table columns={columns} data={data} renderRows={renderRows} />
      </div>
    </div>
  );
};

const data = [
  { metric: "Material", value: "Ceramic" },
  { metric: "Color", value: "White" },
  { metric: "Shape", value: "Round" },
  { metric: "Dishwasher Safe", value: "Yes" },
  { metric: "Microwave Safe", value: "Yes" },
  { metric: "Oven Safe", value: "No" },
  { metric: "Freezer Safe", value: "No" },
  { metric: "Lead-Free", value: "Yes" },
  { metric: "Non-Toxic", value: "Yes" },
  { metric: "Eco-Friendly", value: "Yes" },
  { metric: "Handmade", value: "No" },
  { metric: "Country of Origin", value: "Italy" },
  { metric: "Warranty", value: "1 Year" },
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

export default Qualifications;
