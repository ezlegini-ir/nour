import Image from "@/components/Image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dish } from "@/public/products";
import Link from "next/link";

const ProductsGrid = () => {
  return (
    <Tabs defaultValue="round" className="w-full">
      <TabsList className="w-full bg-transparent gap-10 max-w-sm mx-auto mb-8">
        {categories.map((category) => (
          <TabsTrigger key={category.value} value={category.value}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="round">
        {[1].map((_, idx) => (
          <div key={idx}>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 15 }).map((_, idx) => (
                <Link href={"/products/1"} key={idx}>
                  <div className="bg-muted rounded-md aspect-square text-muted-foreground flex items-center justify-center">
                    <Image
                      alt={`Photo ${idx + 1}`}
                      src={dish}
                      size={400}
                      className="rounded-md object-cover"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="itali">Itali</TabsContent>
      <TabsContent value="new">New</TabsContent>
      <TabsContent value="random">Random Products</TabsContent>
    </Tabs>
  );
};

const categories = [
  { value: "round", name: "Round Shaped" },
  { value: "itali", name: "Itali Shaped" },
  { value: "new", name: "New Shaped" },
  { value: "random", name: "Random Products" },
];

export default ProductsGrid;
