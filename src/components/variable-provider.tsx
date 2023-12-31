"use client";

import React, { useState, createContext, ReactNode } from "react";

interface MyVariableType {
  amount: number;
  currency: string;
  resultADA: number;
  result: number;
}

interface MyContextType {
  variables: MyVariableType;
  setVariables: React.Dispatch<React.SetStateAction<MyVariableType>>;
}

export const VariableContext = createContext<MyContextType | undefined>(
  undefined
);

export default function VariableProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [variables, setVariables] = useState<MyVariableType>({
    amount: 0,
    currency: "USD",
    resultADA: 0,
    result: 0,
  });

  const contextValue: MyContextType = {
    variables,
    setVariables,
  };

  return (
    <VariableContext.Provider value={contextValue}>
      {children}
    </VariableContext.Provider>
  );
}
