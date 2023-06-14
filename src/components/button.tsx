"use client";
import { useSearchParams } from "next/navigation";

import { useContext, useState } from "react";

import { VariableContext } from "./variable-provider";

export default function ButtonComponent() {
  const context = useContext(VariableContext)!;
  const { variables, setVariables } = context;

  async function postData(currency: string, amount: number) {
    const data = await fetch(
      `http://localhost:3500/api/${currency.toLowerCase()}`,
      {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          amount: amount,
        }),
      }
    );

    return data.json();
  }

  async function handleClick() {
    const result = await postData(variables.currency, variables.amount);

    setVariables({
      ...variables,
      resultADA: result.ada,
      result: Number(Object.values(result)[1]),
    });

    console.log(variables);
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
