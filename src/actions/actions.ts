"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createPost(formData: unknown) {
  // authentication
  const { isAuthenticated } = await getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  // validation (Zod)

  const title = formData.get("title") as string;
  console.log(title);

  // insert into database
  // await prisma.post.create({
  //   data: {
  //     title,
  //   },
  // });
}
