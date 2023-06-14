"use client";
import { useEffect, useState, useCallback, useContext } from "react";

import { VariableContext } from "./variable-provider";

export default function InputComponent() {
  const context = useContext(VariableContext)!;
  const { variables, setVariables } = context;

  useEffect(() => {
    console.log(variables.amount);
  }, []);

  async function handleChange(event: any) {
    setVariables({ ...variables, amount: Number(event.target.value) });
  }

  return (
    <>
      <input
        className="w-8/12 h-4/6 bg-black text-white text-2xl font-bold px-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none"
        type="number"
        id="quantity"
        onChange={handleChange}
      ></input>
    </>
  );
}
