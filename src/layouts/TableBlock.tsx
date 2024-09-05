import { useEffect, useState } from "react";

import {
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { column } from "./columns";
import { Table } from "../components/Table";

import { userAPI } from "../service/userService";
import DebouncedInput from "../components/DebounceInput";

import { useAppDispatch, useAppSelector } from "../hooks/useDispatch";
import { FilterState, filterSlice } from "../store/reducers/FilterSlice";
import { User } from "../types/user";

export const TableBlock = () => {
  const { data: users, isLoading, error } = userAPI.useFetchAllUsersQuery("");
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.filterReducer);
  const { setFilter } = filterSlice.actions;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [filtereUsers, setFilteredUser] = useState([]);
  useEffect(() => {
    if (users) {
      const filteredUsers = users.filter((user: User) =>
        Object.keys(filters).every((key) => {
          const userValue =
            user[key as keyof User]?.toString().toLowerCase() || "";
          const filterValue = filters[key as keyof typeof filters] || "";
          return userValue.includes(filterValue.toLowerCase());
        })
      );
      console.log(filteredUsers);
      setFilteredUser(filteredUsers);
    }
  }, [users, filters]);

  const table = useReactTable({
    data: filtereUsers,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
  });
  const handleFilterChange = (
    field: keyof FilterState["filters"],
    value: string
  ) => {
    dispatch(setFilter({ field, value }));
  };
  if (isLoading) return "Loading...";
  if (error) return <h1>Error</h1>;
  return (
    <div className="  mx-auto">
      <div className="flex">
        <DebouncedInput
          value={filters.name || ""}
          onChange={(e) => handleFilterChange("name", e)}
          label="Name"
        />
        <DebouncedInput
          value={filters.username || ""}
          onChange={(e) => handleFilterChange("username", e)}
          label="Username"
        />
        <DebouncedInput
          value={filters.email || ""}
          onChange={(e) => handleFilterChange("email", e)}
          label="Email"
        />
        <DebouncedInput
          value={filters.phone || ""}
          onChange={(e) => handleFilterChange("phone", e)}
          label="Phone"
        />
      </div>

      <input
        type="text"
        className="bg-blue-50 border border-solid  border-blue-900 "
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <Table table={table} />
    </div>
  );
};
