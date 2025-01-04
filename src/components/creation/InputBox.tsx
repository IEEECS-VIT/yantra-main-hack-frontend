interface InputBoxProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function InputBox({
  placeholder,
  value,
  onChange,
}: InputBoxProps) {
  return (
    <div className="relative w-full max-w-md">
      <input
        className=" bg-opacity-30 bg-white w-full p-6 border text-center text-white bg-transparent  border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
