import APP_DATA from "../data.js";

const WELCOME_HEADING = "Welcome text!";
const WELCOME_SUBHEADING = " Welcome sub heading text here.";

const Welcome = () => {
  return (
    <div className="w-full flex flex-col justify-start ">
      <header className=" text-2xl italic font-bold">
        {APP_DATA.WELCOME_HEADING}{" "}
      </header>
      <section>
        <p className=" tracking-wider text-gray-500">
          {APP_DATA.WELCOME_SUBHEADING}
        </p>
      </section>
    </div>
  );
};

export default Welcome;
