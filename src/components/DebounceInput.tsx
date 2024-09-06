import { FC, useEffect, useState } from "react";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
  label: string;
};

const DebouncedInput: FC<InputProps> = ({
  value: initialValue,
  onChange,
  debounce = 500,
  label,
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="relative my-3 w-full">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="text-black  border-2 peer block w-full appearance-none rounded-xl border-gray-400 px-0 py-[14px] pl-6 text-sm focus:border-blue-800 focus:outline-none focus:ring-0"
      />
      <label className="absolute pointer-events-none top-4 left-6 text-gray-600 text-sm bg-white duration-300 transform -translate-y-6 transparent peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:px-[4px] peer-focus:text-blue-900 peer-focus:transparent">
        {label}
      </label>
    </div>
  );
};

export default DebouncedInput;
