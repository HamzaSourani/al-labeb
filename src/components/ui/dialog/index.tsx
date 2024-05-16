import { FC, PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { TProps } from "./type";
import { twMerge } from "tailwind-merge";
import CloseIcon from "@/components/svg/close";

const Dialog: FC<PropsWithChildren<TProps>> = ({
  className,
  open,
  onClose,
  children,
}) => {
  useEffect(() => {
    if (open) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.style.overflow = "hidden";
    } else if (!open) document.body.style.overflow = "auto";
  }, [open]);

  return createPortal(
    <>
      {open && (
        <>
          <div
            onClick={onClose}
            className="absolute left-0 top-0 z-50 h-screen w-screen bg-[rgba(0,0,0,.7)]"
          ></div>
          <div className=" absolute left-0 top-0 flex h-screen w-screen items-center justify-center   ">
            <dialog
              open={open}
              className={twMerge(
                "flex flex-col gap-4 rounded-md bg-white   open:z-50 open:m-auto",
                className,
              )}
            >
              <button
                className=" self-end p-2 transition-transform hover:scale-105 "
                onClick={onClose}
              >
                <CloseIcon className="h-4 w-4  fill-secondary" />
              </button>
              {children}
            </dialog>
          </div>
        </>
      )}
    </>,
    document.body,
  );
};

export default Dialog;
