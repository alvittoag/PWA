import React from "react";

const InputGerbong = (props) => {
  const { title, onChange, value, disable } = props;
  return (
    <div className="space-y-2">
      <label className="text-[14px] text-[#262627] font-semibold">
        {title}
      </label>

      <div className="relative">
        <input
          value={value}
          disabled={disable}
          onChange={onChange}
          type="number"
          className="border border-[#D2D7E0] bg-[#F9FAFB] py-2  pl-14 pr-4 rounded-lg focus:outline-none w-full disabled:cursor-not-allowed"
        />

        <div className="absolute top-[1px] left-1 px-3 border-r bg-white border-[#D2D7E0] rounded-l-lg py-2">
          Rp
        </div>
      </div>
    </div>
  );
};

export default InputGerbong;
