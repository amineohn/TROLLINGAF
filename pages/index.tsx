import { Transition } from "@headlessui/react";
import type { NextPage } from "next";
import React, { useState } from "react";
import Confetti from "react-confetti";
import FadeIn from "react-fade-in";
import { useWindowSize } from "react-use";
const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <>
      <Transition
        show={openModal}
        enter="transition-opacity duration-500 ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="z-50"
      >
        <Confetti width={width} height={height} />
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0`}
          >
            <div
              className="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-rose-600 rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-rose-600 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col space-y-2">
                  <h1 className="text-center text-lg font-medium text-white">
                    You have been Rick Rolled
                  </h1>
                  <img
                    className="rounded-lg"
                    src="/static/images/rick-astly-rick-rolled.gif"
                  />
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center">
                    <iframe
                      className="aspect-video rounded-lg shadow-lg w-full h-60"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-rose-600 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="transition bg-rose-900 text-neutral-50 hover:bg-rose-800 dark:bg-neutral-50 dark:text-neutral-700 dark:hover:bg-neutral-200 mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  ahahah !
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <FadeIn className="flex flex-col justify-center items-center h-screen select-none space-y-1">
        <h1 className="text-rose-50 text-7xl font-medium magicFrankie">
          Suce ma biiiiiite
          <div className="animate-spin" onClick={() => setOpenModal(true)}>
            😆
          </div>
        </h1>
        <video
          src="/static/videos/bastien.mp4"
          className="w-full h-full rounded-lg"
          autoPlay
          loop
          muted
        />
      </FadeIn>
    </>
  );
};

export default Home;
