"use client";

import { useState, createContext, ReactNode } from "react";

export const VariableContext = createContext({});

export default function VariableProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [variables, setVariables] = useState(10);

  return (
    <VariableContext.Provider value={{ variables, setVariables }}>
      {children}
    </VariableContext.Provider>
  );
}
