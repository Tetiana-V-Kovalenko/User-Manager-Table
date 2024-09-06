import DebouncedInput from "../../components/DebounceInput";
import { Icon } from "../../components/Icon";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { FilterState, filterSlice } from "../../store/reducers/FilterSlice";

export const FiltersBlock = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.filterReducer);
  const { setFilter, resetFilters } = filterSlice.actions;
  const handleFilterChange = (
    field: keyof FilterState["filters"],
    value: string
  ) => {
    dispatch(setFilter({ field, value }));
  };
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="max-w-[1200px] mx-auto mb-[10px]">
      <div className="flex justify-between items-center mb-[10px]">
        <h2 className="text-blue-900 text-xl font-bold">
          Please use the inputs below for advanced filtering
        </h2>
        <span
          className="flex items-center gap-1 text-blue-800 hover:text-blue-600 group"
          onClick={handleResetFilters}
        >
          Reset
          <Icon
            id="reset"
            className="w-4 h-4 fill-blue-800 group-hover:fill-blue-600"
          />
        </span>
      </div>

      <div className="flex justify-between items-center gap-6 ">
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
    </div>
  );
};
