"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function SelectComponent() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    currency: "USD",
    src: "united-states.png",
    alt: " United States Flag",
  });

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams().toString();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const availableData = [
    { currency: "USD", src: "united-states.png", alt: " United States Flag" },
    { currency: "CZK", src: "czech-republic.png", alt: " Czech Republic Flag" },
    { currency: "EUR", src: "european-union.png", alt: " European Union Flag" },
  ];

  return (
    <div className="absolute top-4 w-full flex flex-col items-center">
      <div className="bg-black text-white w-11/12 p-2 flex left-5 items-center justify-center">
        <Image
          src={`/flags/${selected.src}`}
          width={30}
          height={30}
          alt={`${selected.alt}`}
          className="mx-1"
        />
        <span onClick={() => setOpen(!open)}>{selected.currency}</span>
      </div>
      <ul
        className={`bg-black text-white mt-4 border border-gray w-full rounded-lg ${
          open ? "block" : "hidden"
        }`}
      >
        {availableData.map((data) => (
          <li
            className={`p-2 border flex items-center border-gray hover:bg-gray`}
            key={data.currency}
            onClick={() => {
              setSelected(data);
              setOpen(false);
              router.push(
                pathname +
                  "?" +
                  createQueryString("currency", `${selected.currency}`)
              );
            }}
          >
            <Image
              src={`/flags/${data.src}`}
              width={30}
              height={30}
              alt={`${data.alt}`}
              className="mx-1"
            />
            <span>{data.currency}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}