import { useEffect, useState } from "react";
import {
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { column } from "./columns";
import { Table } from "../../components/Table";
import { userAPI } from "../../service/userAPI";
import { useAppSelector } from "../../hooks/storeHooks";
import { advancedFilter } from "../../utils/advancedFiltering";
import { User } from "../../types/user";
import { isUser } from "../../typeGuards/isUser";
import { FiltersBlock } from "../FiltersBlock/FiltersBlock";

export const TableBlock = () => {
  const { data: users, isLoading, error } = userAPI.useFetchAllUsersQuery("");
  const { filters } = useAppSelector((state) => state.filterReducer);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filteredUsers, setFilteredUser] = useState<User[]>([]);

  useEffect(() => {
    if (users && Array.isArray(users)) {
      const validUsers = users.filter(isUser);
      const currentFilteredUsers = advancedFilter(validUsers, filters);
      setFilteredUser(currentFilteredUsers);
    }
  }, [users, filters]);

  const table = useReactTable({
    data: filteredUsers,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
  });

  if (isLoading) return <h1 className="  mx-auto ">Loading</h1>;
  if (error) return <h1 className="  mx-auto ">Error</h1>;
  return (
    <div className="  mx-auto mt-[50px]">
      <FiltersBlock />
      <Table table={table} />
    </div>
  );
};
