"use client";
import { useSearchParams } from "next/navigation";

import { useContext, useState } from "react";

import { VariableContext } from "./variable-provider";

export default function ButtonComponent() {
  const params = useSearchParams();

  const queryCurrency = params.get("currency")?.toLowerCase();

  const queryAmount = Number(params.get("amount"));

  async function postData(currency: string, amount: number) {
    if (params) {
      console.log(currency);

      const data = await fetch(`http://localhost:3500/api/${currency}`, {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          amount: amount,
        }),
      });

      return data.json();
    }
  }

  async function handleClick() {
    if (queryCurrency && queryAmount) {
      const response = await postData(queryCurrency, queryAmount);
      console.log(response);
    }
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
