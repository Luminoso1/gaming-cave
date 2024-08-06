export const Input = ({ children, type, label, value, handleChange }) => {
  return (
    <label
      htmlFor={label}
      className={`bg-[#F2F2F2] text-black px-6 rounded-2xl flex items-center ${
        type === "email" ? "col-span-2" : ""
      }`}
    >
      {children}
      <input
        type={type}
        name={label}
        id={label}
        placeholder={label}
        className="input py-5 ml-2 w-full"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};
