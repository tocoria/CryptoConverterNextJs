"use client";

import { useContext } from "react";

import { VariableContext } from "./variable-provider";

export default function ButtonComponent() {
  const context = useContext(VariableContext)!;
  const { variables, setVariables } = context;

  async function postData(currency: string, amount: number) {
    const data = await fetch(
      `https://biyu-ya.vercel.app/api/${currency.toLowerCase()}`,
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

    const fullResult = Object.values(result)[1] as number;

    setVariables({
      ...variables,
      resultADA: result.ada,
      result: Number(fullResult.toFixed(2)),
    });
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
