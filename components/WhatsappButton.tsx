import { BsWhatsapp } from "react-icons/bs";

const WhatsappButton = () => {
  return (
    <div className="text-center mb-7 bg-[#333333] rounded-lg w-[90%] flex justify-center items-center">
      <a
        href="https://whatsapp.com/channel/0029Va8lsG74tRrzqkQjUC3C"
        target="_blank"
        className="inline-flex p-4  text-white justify-center items-center gap-2 text-xs md:text-sm lg:text-base"
      >
        <BsWhatsapp className="w-8 h-8" />
        Get Shayari on your Whatsapp
      </a>
    </div>
  );
};

export default WhatsappButton;
