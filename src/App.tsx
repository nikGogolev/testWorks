import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import SelectCategory from "./components/SelecCategory/SelectCategory";
import ShopTable from "./components/ShopTable/ShopTable";
import Widget from "./components/widget/widget";
import shopDB, {
  Categories,
  getProductsByCategory,
  ProductItem,
} from "./serverMock/shopDB";

function App() {
  const [products, setProducts] = useState<Array<ProductItem>>();
  const [category, setCategory] = useState("");

  const makeOrder = async function (idx: number) {
    if (products) {
      const func = products[idx].makeOrder;
      if (func instanceof Function) {
        await func.apply(products[idx]);
        //const products = await getProductsByCategory(category);
        setProducts([...products]);
      }
    }
  };

  const selectCategory = async (category: Categories | string) => {
    setProducts([]);
    setCategory(category);
    const products = await getProductsByCategory(category);
    setProducts(products);
  };

  return (
    <div className="App">
      <Widget
        title="Спортинвентарь"
        expandable
        controlChildren={
          <SelectCategory
            catgories={Object.values(Categories)}
            selectCategory={selectCategory}
          />
        }
        contentTitle={category}
      >
        {category ? (
          products?.length ? (
            <ShopTable products={products} makeOrder={makeOrder} />
          ) : (
            <Loader />
          )
        ) : (
          <p>Выберите категорию</p>
        )}
      </Widget>
    </div>
  );
}

export default App;
