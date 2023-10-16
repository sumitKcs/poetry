"use client";

import TextField from "@mui/material/TextField";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Reset = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const nextHandler = () => {
    setEmailSent(true);
  };
  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <>
      {!emailSent ? (
        <main className="w-full mt-5 md:w-[70%] lg:w-[45%]  p-5 flex flex-col justify-start items-start gap-8">
          <div className="text-xl md:text-2xl font-medium  title-underline">
            Reset Password
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <TextField
              onChange={emailHandler}
              className="w-full"
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
              required
            />
          </div>
          <button
            onClick={nextHandler}
            className="w-[30%] mt-7 md:w-[20%] bg-[#333333] py-4 rounded text-white"
          >
            Next
          </button>
          <span>
            Already have a password and?&nbsp;
            <Link href="/login" className="text-sm text-blue-700">
              Login
            </Link>
          </span>
        </main>
      ) : (
        <main className="w-full mt-5 md:w-[70%] lg:w-[45%]  p-5 flex flex-col justify-center items-center gap-8">
          <div>
            <AiFillCheckCircle className=" w-36 h-36 text-green-700 " />
          </div>
          <div className="text-center">
            Email with password reset link has been sent to
            {email}
          </div>
        </main>
      )}
    </>
  );
};

export default Reset;
