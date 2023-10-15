import { WelcomeText, WelcomeShayariCard, SearchShayari } from "@/components";

export default function Home() {
  return (
    <main className="w-full h-[svh] md:w-[70%] lg:w-[45%]  p-5 flex flex-col justify-center items-center">
      <WelcomeText />
      <WelcomeShayariCard />
      <SearchShayari />
    </main>
  );
}

``;
