// ** Import Components
import BarDetailPesananKa from "../../../components/pesanan-ka/detail-pesananKa/BarDetailPesananKa";
import TrainDetail from "../../../components/pesanan-ka/detail-pesananKa/TrainDetail";
import PessangerDetail from "../../../components/pesanan-ka/detail-pesananKa/PessangerDetail";
import PriceDetail from "../../../components/pesanan-ka/detail-pesananKa/PriceDetail";
import LoaderPages from "../../../globals/LoaderPages";

// ** Import Other
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../../services/base";
import useSWR from "swr";
import { fetcherGet } from "../../../services/fetcher/fetcher";

export default function DetailPesananKa() {
  const {
    state: { data },
  } = useLocation();

  const { data: daftarPengguna, isLoading } = useSWR(
    baseUrl(`/admin/user?limit=9999`),
    fetcherGet
  );

  const findUser = daftarPengguna?.data?.find(
    (pengguna) => pengguna.id === data.user.user_id
  );

  return (
    <div className="bg-[#F5F6F8] fixed overflow-y-auto left-0 right-0 h-full">
      <BarDetailPesananKa />

      <hr />

      <div className="text-[#262627]">
        <TrainDetail data={data} />

        <PessangerDetail data={data} user={findUser} />

        <PriceDetail data={data} />
      </div>

      {isLoading && <LoaderPages />}
    </div>
  );
}
