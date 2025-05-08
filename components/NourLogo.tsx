import Image from "next/image";

interface Props {
  size?: number;
  className?: string;
}

const NourLogo = ({ className, size }: Props) => {
  return (
    <Image
      src={"/nour-logo.svg"}
      alt={"Nour Porcelain"}
      width={size || 90}
      height={size || 90}
      draggable={false}
      className={className}
    />
  );
};

export default NourLogo;
