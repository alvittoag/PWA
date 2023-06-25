const ModalDaftarPengguna = (props) => {
  const { title, description, bgButton, titleButton, setModal, handle } = props;

  return (
    <div className="fixed z-50 duration-500 top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-gray-700/50">
      <div className="bg-white w-[500px] h-[230px] rounded-xl px-8">
        <div className="mb-[32px] space-y-1">
          <h1 className="font-[600] text-[20px] text-[#262627] mt-[32px]">
            {title}
          </h1>

          <p className="font-[300] text-[16px] text-[#717275]">{description}</p>
        </div>

        <div className="grid grid-cols-2 mb-[32px] mt-[40px] gap-5">
          <button
            onClick={() => setModal(false)}
            className="text-[16px] font-[500] text-[#4B4C4E] py-[11px] border border-[#D2D7E0] rounded-lg bg-[#F9FAFB]"
          >
            Tidak
          </button>

          <button
            onClick={handle}
            className={`text-[16px] font-[500] py-[11px] border border-[#D2D7E0] rounded-lg ${bgButton} text-white`}
          >
            {titleButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDaftarPengguna;
