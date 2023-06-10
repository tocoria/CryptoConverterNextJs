"use server";

import { cookies } from "next/headers";

export async function saveToCookies(data: string) {
  await cookies().set("targetcurrency", data);
  console.log("Saved to cookies:", data);
}

export async function getCookies(cookieName: string) {
  const cookie = await cookies().get(cookieName);

  console.log(cookie?.value);
}
