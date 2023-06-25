export default function InputPengguna(props) {
  const { name, type, label, id, onChange, value, placeholder } = props;
  return (
    <div className="flex flex-col pb-5">
      <label htmlFor={name} className="font-medium pb-3">
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={id}
        className="bg-[#F9FAFB] border border-[#D2D7E0] p-2 rounded-md focus:outline-blue-500"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
