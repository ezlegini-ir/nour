import ProductsGrid from "./components/ProductsGrid";

const ProductsPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Our Products</h1>
      <p className="text-center text-muted-foreground">
        Discover our collection of elegant and colorful porcelain dinnerware.{" "}
        <br />
        From minimal everyday dishes to vibrant table sets, each piece is
        designed to elevate your dining experience with timeless simplicity.
      </p>

      <div className="flex justify-center items-center">
        <ProductsGrid />
      </div>
    </div>
  );
};

export default ProductsPage;
