// ** Import Assets
import assets from "../../../assets/assets";

const ButtonDetailHotel = ({ title, setModal, validate }) => {
  return (
    <div className="flex gap-3">
      <button
        className=" px-7 py-[9.5px] font-[500] text-[#4B4C4E] border border-[#D2D7E0] bg-[#F9FAFB] flex items-center rounded-lg"
        onClick={() => {
          setModal((prev) => {
            return { ...prev, edit: true };
          });
        }}
      >
        <span className="me-2 text-[18px]">Edit {title}</span>
        <img src={assets.iconEditDaftarKa} alt="edit" />
      </button>

      <button
        disabled={validate}
        className={`${validate ? "opacity-40" : ""} px-7 font-[500] bg-[#DB2D24] flex items-center gap-2 rounded-lg`}
        onClick={() => {
          setModal((prev) => {
            return { ...prev, delete: true };
          });
        }}
      >
        <span className="ms-2 text-[18px] text-white ">Hapus {title}</span>

        <img src={assets.iconDeleteDaftarKa} alt="delete" />
      </button>
    </div>
  );
};

export default ButtonDetailHotel;
