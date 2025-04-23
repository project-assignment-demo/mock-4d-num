import { createPortal } from "react-dom";
import { useSiteStore } from "../../store";
import Cancel from "../../assets/outlineCancel.svg?react";
import Download from "../../assets/download.svg?react";
import Share from "../../assets/share.svg?react";
import { useMemo } from "react";
import dayjs from "dayjs";

import type { ShareInfoConfig, DownloadImageConfig } from "./type";

const Modal = () => {
  const date = useSiteStore((state) => state.selectedDate);
  const closeModal = useSiteStore((state) => state.closeModal);
  const isOpen = useSiteStore((state) => state.showModal);
  const modalContent = useSiteStore((state) => state.modalContent);
  const imageSource = useMemo(() => {
    return modalContent?.image;
  }, [modalContent]);

  const formattedDate = useMemo(() => {
    return dayjs(date).format("D MMMM YYYY");
  }, [date]);

  const formattedDay = useMemo(() => {
    return dayjs(date).format("dddd");
  }, [date]);

  const title = useMemo(() => {
    return modalContent?.title ?? "";
  }, [modalContent]);

  const handleDownload = async ({
    imageUrl,
    title,
    date,
  }: DownloadImageConfig) => {
    if (!imageUrl) return;
    const formattedDate = dayjs(date).format("YYYY_MM_DD");
    const response = await fetch(imageUrl, { mode: "cors" });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${formattedDate}_${title}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleShareInfo = async ({ shareUrl, title, date }: ShareInfoConfig) => {
    if ("share" in navigator && typeof navigator.share === "function") {
      await navigator.share({
        title: `${title} ${dayjs(date).format("YYYY-MM-DD")}`,
        url: '',
      });
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 h-[100dvh] bg-black z-9999 text-black opacity-80"></div>
      <div className="fixed z-10000 pb-5 inset-0 text-black m-auto flex flex-col h-[100dvh] md:h-[90dvh] w-[100dvw] md:w-fit md:min-w-[500px] md:rounded-[20px] gap-5 bg-white">
        <div className="flex flex-row justify-between items-center text-white text-xl gap-10 leading-[1] bg-[rgb(38,76,170)] p-5 -mt-[0.125rem] -ms-[0.125rem] -me-[0.125rem] rounded-b-[20px] md:rounded-[20px]">
          <div className="flex flex-col gap-2">
            <p className="text-[20px] text-white font-medium">{title}</p>
            <p className="text-[12px] py-1 px-4 rounded-[20px] bg-[rgb(255,184,2)] text-[rgb(130,39,0)] font-extrabold">
              {`${formattedDay} | ${formattedDate}`}
            </p>
          </div>
          <button
            onClick={closeModal}
            className="min-w-10 h-10 flex justify-center items-center leading-[1.2] font-semibold text-md px-4 py-6 bg-[rgb(241,241,241)] rounded-full whitespace-nowrap outline outline-transparent"
          >
            <Cancel className="w-4 h-4 text-black" />
          </button>
        </div>
        <div className="flex h-full justify-evenly flex-col md:gap-5">
          <div className="flex justify-center items-center">
            {modalContent === null ? (
              <p>Loading</p>
            ) : (
              <img
                className="border-none w-auto max-h-[55vh] shadow-md"
                src={modalContent.image}
              />
            )}
          </div>
          <div className="flex gap-2 justify-center w-fit bg-[rgb(233,233,233)] rounded-[50px] p-4 m-auto">
            <button
              onClick={() =>
                handleDownload({ imageUrl: imageSource, title, date })
              }
              disabled={modalContent == null}
              className="flex justify-center items-center select-none leading-[1.2] font-semibold h-10 min-w-10 text-md px-4 disabled:bg-gray-400 bg-[rgb(34,34,34)] text-white whitespace-nowrap outline outline-transparent rounded-[100px]"
            >
              <span className="flex items-center shrink-0 mr-2">
                <Download />
              </span>
              {"Download"}
            </button>
            <button
              onClick={() =>
                handleShareInfo({
                  title,
                  date,
                  shareUrl: imageSource ?? "",
                })
              }
              disabled={modalContent == null}
              className="flex justify-center items-center select-none leading-[1.2] font-semibold h-10 min-w-10 text-md px-4 disabled:bg-gray-400 bg-[rgb(34,34,34)] text-white whitespace-nowrap outline outline-transparent rounded-[100px]"
            >
              <span className="flex items-center shrink-0 mr-2">
                <Share />
              </span>
              {"Share"}
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
