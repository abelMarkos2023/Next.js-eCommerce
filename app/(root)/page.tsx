import ProductList from "@/components/ui/shared/products/ProductList";
import { getLatestProducts } from "@/lib/actions/products.actions";

 async function Home() {

  const products = await getLatestProducts(10);
  return (
   <>
      <ProductList title="Featured Products" data={products} />
   </>
  );
}
export default Home
