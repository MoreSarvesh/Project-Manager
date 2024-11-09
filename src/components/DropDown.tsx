const DropDown = ({
  options,
  handelFilter,
}: {
  options: string[];
  handelFilter: (arg: string) => void;
}) => {
  return (
    <div className="bg-white rounded-sm px-4 py-2 absolute top-10 -right-5 w-full text-center shadow-lg">
      {options.map((opt, index) => (
        <div
          key={opt + index}
          className="text-slate-400 font-light py-2 hover:text-orange-600 cursor-pointer"
          onClick={() => handelFilter(opt)}
        >
          {opt}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
