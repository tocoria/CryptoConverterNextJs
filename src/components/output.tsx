"use client";

import { VariableContext } from "./variable-provider";
import { useEffect, useState, useCallback, useContext } from "react";

export default function Output() {
  const context = useContext(VariableContext)!;

  const { variables, setVariables } = context;
  return (
    <div className="w-8/12 h-4/6 bg-black text-white text-2xl font-bold px-3 flex items-center">
      {variables.result == 0 ? null : variables.result}
    </div>
  );
}
