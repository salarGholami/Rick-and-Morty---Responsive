// import { XCircleIcon } from "@heroicons/react/24/outline";

import { XCircleIcon } from "@heroicons/react/24/outline";

function Modal({ title, showModal, setShowModal, children }) {
  return (
    <>
      {showModal ? (
        <div className="relative z-10">
          <div className="fixed inset-0 bg-gray-950 bg-opacity-85 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg text-left shadow-lg bg-slate-800 shadow-gray-600 transition-all p-3 m-3 container">
                <div className="flex justify-between items-center border-b-2 pb-2">
                  <div className="">{title}</div>
                  <button className="w-5 h-5 text-red-600" onClick={()=>setShowModal()}>
                    <XCircleIcon />
                  </button>
                </div>
                <div className="">{children}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
