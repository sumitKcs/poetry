import APP_DATA from "@/data";
import TextField from "@mui/material/TextField";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

const page = () => {
  return (
    <main className="w-full mt-5 md:w-[70%] lg:w-[45%]  p-5 flex flex-col justify-start items-start gap-8">
      <div className="text-xl md:text-2xl font-medium  title-underline">
        Sign in to {APP_DATA.APP_NAME}
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <TextField
          className="w-full"
          id="standard-basic"
          label="Name"
          type="text"
          variant="standard"
          required
        />
        <TextField
          className="w-full"
          id="standard-basic"
          label="Username"
          type="email"
          variant="standard"
          required
        />
        <TextField
          className="w-full"
          id="standard-basic"
          label="Email"
          type="email"
          variant="standard"
          required
        />
        <div className="w-full relative flex">
          <TextField
            className="w-full"
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
            required
          />
          <AiFillEye className="w-6 h-6 absolute top-5 right-0 " />
        </div>
        <TextField
          className="w-full"
          id="standard-basic"
          label="Confirm Password"
          type="password"
          variant="standard"
          required
        />
      </div>
      <button className="w-[30%] mt-7 md:w-[20%] bg-[#333333] py-4 rounded text-white">
        Create Account
      </button>
      <span>
        Already a User?&nbsp;
        <Link href="/login" className="text-sm text-blue-700">
          Sign In
        </Link>
      </span>
    </main>
  );
};

export default page;
