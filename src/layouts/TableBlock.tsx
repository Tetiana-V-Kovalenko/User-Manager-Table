import { FC } from "react";
import { useUsers } from "../service/getUsers";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { column } from "./columns";
import { Table } from "../components/Table";
import { Input } from "../components/Input";

export const TableBlock: FC = () => {
  const { isLoading, data: users = [] } = useUsers();

  const table = useReactTable({
    data: users,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return "Loading...";

  return (
    <div className="  mx-auto">
      <div className="flex">
        <Input />
        <Input />
      </div>

      <Table table={table} />
    </div>
  );
};
