"use client";
import { useEffect, useState, useCallback, useContext } from "react";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { VariableContext } from "./variable-provider";

export default function InputComponent() {
  {
    /* Variables */
  }
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams().toString();

  {
    /* useState */
  }
  const [count, setCount] = useState("");
  const { variables, setVariables } = useContext(VariableContext);
  {
    /* Function to update query */
  }
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  {
    /* useEffect*/
  }
  useEffect(() => {
    router.push(pathname + "?" + createQueryString("amount", `${count}`));
  }, [count]);
  {
    /* onChange Handler */
  }
  function handleChange(event: any) {
    setCount(event.target.value);
    console.log(variables);
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
