interface InputBoxProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function InputBox({
  placeholder,
  value,
  onChange,
  disabled = false,
}: InputBoxProps) {
  return (
    <div className="relative w-full max-w-md">
      <input
        className={`bg-opacity-30 bg-white w-full p-6 border text-center text-white bg-transparent  border-white rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer opacity-100"}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}
