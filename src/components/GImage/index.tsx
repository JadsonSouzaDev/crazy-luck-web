import Image, { StaticImageData } from "next/image";

type GImageProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  wClass: string;
  hClass: string;
};

const GImage = ({ src, alt, className, wClass, hClass }: GImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width="0"
      height="0"
      sizes="100vw"
      style={{ objectFit: "contain" }}
      className={`${className} ${wClass} ${hClass}`}
    />
  );
};

export default GImage;
