// ** Import React
import { useState } from "react";

// ** Import Components
import KelasEkonomi from "../tambah-ka/KelasEkonomi";
import KelasBisnis from "../tambah-ka/KelasBisnis";
import KelasEksekutif from "../tambah-ka/KelasEksekutif";
import LoaderPages from "../../../globals/LoaderPages";

// ** Import Other
import axios from "axios";
import useSWR from "swr";
import { baseUrl } from "../../../services/base";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const DetailKursi = ({ data }) => {
  const { data: detailGerbong, isLoading } = useSWR(
    baseUrl("/public/train-carriage?limit=9999"),
    fetcher
  );

  // ** Local State
  const [page, setPage] = useState(0);

  const findGerbong = detailGerbong?.data?.filter(
    (gerbong) => gerbong.train.train_id === data.train_id
  );

  const pickGerbong =
    findGerbong === null ? [] : isLoading ? [] : findGerbong[page];

  return (
    <div className="px-14 space-y-20 pb-10">
      {findGerbong?.length === 0 ? (
        <div className="text-center text-gray-600 mt-36 text-3xl">
          * Gerbong Tidak Tersedia
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <button
            disabled={page === 0}
            className="disabled:cursor-not-allowed border border-[#D2D7E0] bg-[#F9FAFB] text-[#262627] py-2 px-5 rounded-lg flex items-center gap-2 disabled:bg-[#FDFDFE] disabled:border-gray-200 disabled:text-gray-300"
            onClick={() => setPage((prev) => prev - 1)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99998 13.6668L0.333313 7.00016L6.99998 0.333496L8.18748 1.50016L3.52081 6.16683H13.6666V7.8335H3.52081L8.18748 12.5002L6.99998 13.6668Z"
                fill={`${page == 0 || isLoading ? "#D6DADF" : "#262627"}`}
              />
            </svg>
            Sebelumnya
          </button>

          <h1 className="text-[#262627] text-[20px] font-[600]">
            {isLoading ? "..." : pickGerbong?.name}
          </h1>

          <button
            disabled={page === findGerbong?.length - 1}
            className="disabled:cursor-not-allowed border border-[#D2D7E0] bg-[#F9FAFB] text-[#262627] py-2 px-8 rounded-lg flex items-center gap-2 disabled:bg-[#FDFDFE] disabled:border-gray-200 disabled:text-gray-300 font-600"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Selanjutnya{" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00004 13.6668L5.81254 12.5002L10.4792 7.8335H0.333374V6.16683H10.4792L5.81254 1.50016L7.00004 0.333496L13.6667 7.00016L7.00004 13.6668Z"
                fill={`${
                  page === findGerbong?.length - 1 || isLoading
                    ? "#D6DADF"
                    : "#262627"
                }`}
              />
            </svg>
          </button>
        </div>
      )}

      {pickGerbong?.train?.class === "Ekonomi" && <KelasEkonomi />}
      {pickGerbong?.train?.class === "Bisnis" && <KelasBisnis />}
      {pickGerbong?.train?.class === "Eksekutif" && <KelasEksekutif />}

      {isLoading && (
        <div>
          <LoaderPages />
        </div>
      )}
    </div>
  );
};
