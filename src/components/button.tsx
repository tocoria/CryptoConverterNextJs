"use client";
import { getCookies } from "../utils/cookies-utils";

export default function ButtonComponent() {
  function handleClick() {
    getCookies("targetcurrency");
  }

  return (
    <>
      <button
        className="w-5/6 h-16 bg-blue rounded-2xl text-white font-bold text-xl"
        onClick={handleClick}
      >
        Send
      </button>
    </>
  );
}
