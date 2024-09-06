import { FC, useState } from "react";
import { User } from "../types/user";
import { Table as TanStackTable, flexRender } from "@tanstack/react-table";
import { Icon } from "./Icon";

type TableProps<T extends User> = {
  table: TanStackTable<T>;
  className?: string;
};

export const Table: FC<TableProps<User>> = ({ table, className }) => {
  const [isExtended, setIsExtended] = useState(false);
  const handleExtendedTable = () => {
    setIsExtended(!isExtended);
  };
  return (
    <div
      className={
        " border-solid border-[1px] border-blue-900  " +
        (isExtended
          ? " w-full max-h-[90vh]  bg-white absolute top-[54px] left-[50%] text-2xl -translate-x-[50%] z-[2] max-w-[1400px] rounded-xl overflow-auto "
          : " max-w-[1200px] relative my-0 mx-auto overflow-auto rounded-xl text-lg")
      }
    >
      <div onClick={handleExtendedTable}>
        {isExtended ? (
          <Icon
            id="shrink"
            className="absolute w-[15px] h-[15px] p-0 top-2 right-2 bg-transparent fill-blue-900 border-none hover:fill-gray-0 "
          />
        ) : (
          <Icon
            id="enlarge"
            className="absolute w-[15px] h-[15px] p-0 top-2 right-2 bg-transparent fill-blue-900 border-none hover:fill-gray-0 "
          />
        )}
      </div>

      <table className={" border-collapse rounded-xl w-full " + className}>
        <thead className="bg-blue-50 rounded-xl border-solid border-b border-blue-900">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="py-[8px] text-start w-fit  font-sans text-blue-900 border-none h-[56px] "
                  >
                    <div className="flex justify-start items-center gap-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      <div onClick={header.column.getToggleSortingHandler()}>
                        <Icon
                          id="circle-up"
                          className={`w-4 h-4  ${
                            header.column.getIsSorted() === "desc"
                              ? "rotate-180"
                              : header.column.getIsSorted() === "asc"
                              ? ""
                              : " fill-blue-300"
                          } ${
                            header.getContext().column.id === "checkbox"
                              ? " hidden"
                              : " "
                          }`}
                        />
                      </div>
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="border border-solid border-gray-50 border-t-0 bg-white">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:outline hover:outline-[1px] hover:outline-blue-200"
              >
                {row.getVisibleCells().map((cell) => (
                  <td className="py-[10px] " key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="hover:outline hover:outline-[1px] hover:outline-grey-200 text-center">
              <td className="py-[10px] text-center">No results</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
