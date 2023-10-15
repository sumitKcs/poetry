import {
  WelcomeText,
  WelcomeShayariCard,
  SearchShayari,
  VideoCard,
  ShayariMoods,
  ShayariCategories,
  WhatsappButton,
  LatestBlogs,
  Writers,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full md:w-[70%] lg:w-[45%]  p-5 flex flex-col justify-center items-center">
      <WelcomeText />
      <WelcomeShayariCard />
      <SearchShayari />
      <VideoCard />
      <ShayariMoods />
      <ShayariCategories />
      <WhatsappButton />
      <LatestBlogs />
      <Writers />
    </main>
  );
}

``;
