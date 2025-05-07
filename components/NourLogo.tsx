import Image from "next/image";

interface Props {
  size?: number;
  inputProps?: any;
  className?: string;
}

const NourLogo = ({ inputProps, className, size }: Props) => {
  return (
    <Image
      src={"/nour-logo.svg"}
      alt={"Nour Porcelain"}
      width={size || 90}
      height={size || 90}
      draggable={false}
      {...inputProps}
      className={className}
    />
  );
};

export default NourLogo;
