"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user?.email,
      password: user?.password,
    });
    if (data) {
      toast.success("Login Successful");
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const handleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="mt-26 my-10 max-w-7xl mx-auto">
      <Card className="border border-[#0a9396] shadow-2xl w-92 mx-auto">
        <div className="space-y-2 my-5 text-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={40}
            height={40}
            className="mx-auto"
          ></Image>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500">Sign in to your DocAppoint account</p>
        </div>
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type={isShowPassword ? "text" : "password"}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>
          <span
            className="absolute right-12 top-74 text-lg"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>

          <Button
            className={
              "w-full rounded-lg bg-linear-to-r from-[#005f73]/80 to-[#0a9396]"
            }
            type="submit"
          >
            LogIn
          </Button>
        </Form>

        <div className="flex justify-center items-center gap-3">
          <Separator></Separator>
          <div className="whitespace-nowrap">Or</div>
          <Separator></Separator>
        </div>
        <div>
          <Button
            onClick={handleSignin}
            variant="outline"
            className={"w-full rounded-lg flex items-center gap-2"}
          >
            <FcGoogle /> Continue with Google
          </Button>
        </div>
        <div className="text-center">
          <p>
            Don't have an account?
            <Link href={"/register"}>
              <span className="text-[#0a9396]"> Register</span>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
