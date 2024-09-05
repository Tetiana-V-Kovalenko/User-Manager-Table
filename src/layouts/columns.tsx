import {
  CellContext,
  ColumnDef,
  RowData,
  createColumnHelper,
} from "@tanstack/react-table";
import { User } from "../types/user";
import { ReactNode } from "react";

interface ColumnMeta<User extends RowData> {
  filterKey?: keyof User;
}
const columnHelper = createColumnHelper<User>();

export const column: ColumnDef<User>[] = [
  columnHelper.display({
    id: "checkbox",
    cell: ({ row }) => {
      return <div className="px-4">{row.index + 1}</div>;
    },
  }),
  {
    accessorKey: "name",
    id: "name",
    header: "Name",
    meta: { filterKey: "name" },
  },
  {
    accessorKey: "username",
    id: "username",
    header: "Username",
    cell: (row: CellContext<User, any>) => {
      return typeof row.getValue() === "string" ? (
        <span className=" rounded-full bg-blue-400 text-white py-1 px-3 border border-solid border-blue-900">
          {row.getValue()}
        </span>
      ) : (
        <span> Empty username </span>
      );
    },
    meta: { filterKey: "username" },
  },
  {
    accessorKey: "email",
    id: "email",
    header: "Email",
    cell: (row: CellContext<User, any>) => {
      return typeof row.getValue() === "string" ? (
        <a
          href={`mailto:${row.getValue()}`}
          className="text-blue-900 underline text-sm"
        >
          {row.getValue()}
        </a>
      ) : (
        <span> Empty email </span>
      );
    },
    meta: { filterKey: "email" },
  },
  {
    accessorKey: "phone",
    id: "phone",
    header: "Phone",
    cell: (row: CellContext<User, any>) => {
      return typeof row.getValue() === "string" ? (
        <a href={`tel:${row.getValue()}`} className="text-sm font-medium">
          {row.getValue()}
        </a>
      ) : (
        <span> Empty phone </span>
      );
    },
    meta: { filterKey: "phone" },
  },
];
