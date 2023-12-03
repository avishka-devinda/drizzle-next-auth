import SignOutButton from "@components/sign-out-button";
import { Button, buttonVariants } from "@components/ui/button";
import { getAuthSession } from "@lib/auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session?.user ? (
       <SignOutButton/>

      ) : (
        <Link href="/sign-in" className={`${buttonVariants()}`}>
          Sign In
        </Link>
      )}



      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(session, null, 2)}</code>
      </pre>
    </main>
  );
}
