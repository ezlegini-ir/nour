import Image from "@/components/Image";
import ImageDialog from "@/components/ImageDialog";
import { Badge } from "@/components/ui/badge";
import { dish } from "@/public/products";
import ProductBreadCrumb from "./components/ProductBreadCrumb";
import Qualifications from "./components/Qualifications";

const page = () => {
  return (
    <div>
      <ProductBreadCrumb productTitle="31-Piecse itali Shaped Service" />

      <div className="space-y-10">
        <div className="flex gap-4 mt-4">
          <div className="w-1/2">
            <Image
              alt="pic"
              src={dish}
              size={650}
              className="rounded-md aspect-square w-full"
            />
          </div>
          <div className="space-y-3 w-1/2">
            <Badge>Itali Shaped</Badge>
            <h1 className="text-2xl font-bold">
              28-Pieces itali Shaped Service
            </h1>

            <hr />

            <Qualifications />
          </div>
        </div>

        <hr />

        <div className="space-y-3">
          <div className="grid grid-cols-5 gap-4">
            <ImageDialog images={["", "", ""]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
