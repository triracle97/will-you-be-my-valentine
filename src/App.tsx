"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Không",
      "Đi mà mommy?",
      "Pé ngoan mừ?",
      "Đi mommy xinh đẹp",
      "Uống matcha latte nhé",
      "Và cả ăn dimsum",
      "PLEASE MOMMY",
      "Pé pùn lắm",
      "Pé đi đây",
      "Pé đi r đấy",
      "please mommy",
      ":((((",
      "Pé yêu mommy lắm mừ",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://gifdb.com/images/high/milk-and-mocha-kiss-2vwjr4s7usa2g5kj.gif" />
          <div className="my-4 text-4xl font-bold">WOWWWW! Pé yêu mommy nắm nắm !!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Mommy tha lỗi cho pé nhé?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Ừm
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Không" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
