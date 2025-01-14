"use server";

import { revalidatePath } from "next/cache";
import { updateCount } from "@/app/db/db";

export async function updateCountServer(data: FormData) {
  const newValue = data.get("val") as string;
  // data should be validated here ... ie using Zod ...

  console.log("updating count ...", newValue);
  await updateCount(parseInt(newValue));
  revalidatePath("/");
}

export async function updateCountServerWithValue(newValue: number) {
  // when called from a client component we need "use server" at the top of the file
  console.log("updating count ...", newValue, typeof newValue);
  await updateCount(newValue);
  revalidatePath("/");
}
