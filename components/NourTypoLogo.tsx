import Image from "next/image";

interface Props {
  size?: number;
  className?: string;
}

const NourTypoLogo = ({ className, size }: Props) => {
  return (
    <Image
      src={"/nour-typo-logo.svg"}
      alt={"Nour Porcelain"}
      width={size || 70}
      height={size || 70}
      draggable={false}
      className={className}
    />
  );
};

export default NourTypoLogo;
