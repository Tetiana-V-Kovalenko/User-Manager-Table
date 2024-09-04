export const Input = () => {
  return (
    <div className="relative my-3">
      <input
        id="user_email"
        type="email"
        name="email"
        className="text-gray-dark border-2 peer block w-full appearance-none rounded-full border-gray-400 px-0 py-[14px] pl-6 text-sm focus:border-gray-800 focus:outline-none focus:ring-0"
        placeholder=" "
        required
      />
      <label className="absolute pointer-events-none top-4 left-6 text-gray-middle bg-white duration-300 transform -translate-y-6 transparent peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:px-[4px] peer-focus:text-gray-dark peer-focus:transparent">
        E-Mail Addresse
      </label>
    </div>
  );
};
