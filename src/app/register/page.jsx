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
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      image: user.image,
      email: user.email,
      password: user.password,
    });
    if (data) {
      toast.success("Register successful");
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
    }
  };

const handleSignup =async()=>{
    await authClient.signIn.social({
    provider: "google",
  });
}

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
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-gray-500">
            Join DocAppoint for smarter healthcare
          </p>
        </div>
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter Your name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="image" type="url">
            <Label>Image Url</Label>
            <Input placeholder="Your Image Url" />
            <FieldError />
          </TextField>

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
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <Button
            className={
              "w-full rounded-lg bg-linear-to-r from-[#005f73]/80 to-[#0a9396]"
            }
            type="submit"
          >
            Create Account
          </Button>
        </Form>
        <div className="flex justify-center items-center gap-3">
            <Separator></Separator>
            <div className="whitespace-nowrap">Or</div>
            <Separator></Separator>
        </div>
        <div>
            <Button onClick={handleSignup} variant="outline" className={'w-full rounded-lg flex items-center gap-2'}><FcGoogle /> Continue with Google</Button>
        </div>

        <div className="text-center">
            <p>Already have an account? <Link href={'/login'}><span className="text-[#0a9396]">Login</span></Link></p>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
