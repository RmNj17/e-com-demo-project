import "./CategoryProductPage.scss";
import ProductList from "../../components/ProductList/ProductList";
import { useParams } from "react-router-dom";
import productData from "../../utils/products.json";

const CategoryProductPage = () => {
  const { category } = useParams();
  const products = productData?.products;
  const categories = [...new Set(products?.map((product) => product.category))];
  const categoryProducts = {};

  categories.forEach((category) => {
    categoryProducts[category] = products.filter(
      (product) => product.category === category
    );
  });

  return (
    <div className="cat-products py-5 bg-whitesmoke">
      <div className="container">
        <div className="cat-products-content">
          <div className="title-md">
            <h3>
              See our{" "}
              <span className="text-capitalize">
                {category.replace("-", " ")}
              </span>
            </h3>
          </div>

          <ProductList products={categoryProducts[category]} />
        </div>
      </div>
    </div>
  );
};

export default CategoryProductPage;
