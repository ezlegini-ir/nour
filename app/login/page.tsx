import InputForm from "@/components/forms/login/InputForm";
import NourTypoLogo from "@/components/NourTypoLogo";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Link href={"/"}>
        <NourTypoLogo size={90} />
      </Link>

      <Card className="p-5 w-full space-y-3">
        <InputForm />
      </Card>
    </div>
  );
};

export default page;
