// ** Import Assets
import assets from "../../../assets/assets";

const ButtonDetailKa = ({ setModal, setModalEdit }) => {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => setModalEdit(true)}
        className=" px-9 py-[9.5px] font-[500] text-[#4B4C4E] border border-[#D2D7E0] bg-[#F9FAFB] flex items-center rounded-lg"
      >
        <span className="me-2 text-[18px]">Ubah KA</span>
        <img src={assets.iconEditDaftarKa} alt="edit" />
      </button>

      <button
        onClick={() => setModal(true)}
        className="px-8 font-[500] bg-[#DB2D24] flex items-center gap-2 rounded-lg"
      >
        <span className="ms-2 text-[18px] text-white ">Hapus KA</span>

        <img src={assets.iconDeleteDaftarKa} alt="delete" />
      </button>
    </div>
  );
};

export default ButtonDetailKa;
