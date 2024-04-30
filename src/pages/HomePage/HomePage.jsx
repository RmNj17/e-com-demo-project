import "./HomePage.scss";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import ProductList from "../../components/ProductList/ProductList";
import PageHelmet from "../../components/PageHelmet/PageHelmet";
import productData from "../../utils/products.json";

const HomePage = () => {
  const products = productData?.products;
  const tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);

      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }

  return (
    <main>
      <PageHelmet title="ShopMandu - Your Ultimate Online Shopping Destination" />
      <div className="slider-wrapper">
        <HeaderSlider />
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>See our all products</h3>
              </div>
              <ProductList products={tempProducts} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
