import React from "react";
import { DataTable } from "../_components/Datatable/data-table";
import { columns, Payment } from "../_components/Datatable/columns";
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      product: " Veri var",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52d",
      product: " Veri var",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}
const AboutPage = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AboutPage;
