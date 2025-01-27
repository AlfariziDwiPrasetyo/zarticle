"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

type SignInProps = {
  className?: string;
};

export function SignIn({ className }: SignInProps) {
  return (
    <Button
      className={className}
      onClick={() => signIn("github", { redirectTo: "/" })}
    >
      Sign In
    </Button>
  );
}
