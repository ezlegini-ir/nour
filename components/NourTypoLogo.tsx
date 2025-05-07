import Image from "next/image";

interface Props {
  size?: number;
  inputProps?: any;
  className?: string;
}

const NourTypoLogo = ({ inputProps, className, size }: Props) => {
  return (
    <Image
      src={"/nour-typo-logo.svg"}
      alt={"Nour Porcelain"}
      width={size || 65}
      height={size || 65}
      draggable={false}
      {...inputProps}
      className={className}
    />
  );
};

export default NourTypoLogo;
