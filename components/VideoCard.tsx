import Image from "next/image";
import APP_DATA from "@/data";

const VideoCard = () => {
  return (
    <div className="w-full mt-10">
      <a href={APP_DATA.VIDEO_LINK}>
        <Image
          className="w-full object-cover"
          src={APP_DATA.VIDEO_IMAGE}
          alt="youtube video"
          height={480}
          width={800}
        />
      </a>
    </div>
  );
};

export default VideoCard;
