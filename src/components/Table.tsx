import { useState } from "react";
import { User } from "../types/user";
import { Table as TanStackTable, flexRender } from "@tanstack/react-table";
import { Icon } from "./Icon";

export const Table = <T extends User>({
  table,
  className,
}: {
  table: TanStackTable<T>;
  className?: string;
}) => {
  const [isExtended, setIsExtended] = useState(false);
  const handleExtendedTable = () => {
    setIsExtended(!isExtended);
    isExtended ? table.setPageSize(10) : table.setPageSize(500);
  };
  return (
    <div
      className={
        " border-solid border-[1px] border-blue-900  " +
        (isExtended
          ? " w-full max-h-[90vh]  bg-white absolute top-[54px] left-[50%] text-xl -translate-x-[50%] z-[2] max-w-[1400px] rounded-xl overflow-auto "
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
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
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
                  <td
                    className="py-[10px] "
                    key={cell.id}
                    onClick={() => {
                      console.log();
                    }}
                  >
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
