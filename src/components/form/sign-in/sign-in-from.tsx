"use client";
import { Button } from "@components/ui/button";
import { useToast } from "@components/ui/use-toast";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const SignInForm = () => {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoggle = async () => {
    setIsLoading(true);
    try {
      const signInData = await signIn("google", {
        callbackUrl: "http://localhost:3000/",
      });
      if (signInData?.error) {
        toast({
          title: "Error",
          description: "There was an error logining in with Google",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logining in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md w-60 flex justify-center items-center py-5">
      <Button onClick={signInWithGoggle}>continue with Google</Button>
     
    </div>
  );
};

export default SignInForm;
