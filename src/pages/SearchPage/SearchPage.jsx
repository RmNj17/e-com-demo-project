import "./SearchPage.scss";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import productData from "../../utils/products.json";

const SearchPage = () => {
  const { searchTerm } = useParams();
  const products = productData?.products;
  const searchProducts = products.filter((product) => {
    const lowercaseQuery = searchTerm.toLowerCase();

    for (const key in product) {
      if (
        typeof product[key] === "string" &&
        product[key].toLowerCase().includes(lowercaseQuery)
      ) {
        return true;
      }
    }
    return false;
  });

  if (searchProducts.length === 0) {
    return (
      <div
        className="container"
        style={{
          minHeight: "70vh",
        }}
      >
        <div className="fw-5 text-danger py-5">
          <h3>No Products found.</h3>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="search-content bg-whitesmoke">
        <div className="container">
          <div className="py-5">
            <div className="title-md">
              <h3>Search results:</h3>
            </div>
            <br />
            <ProductList products={searchProducts} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
