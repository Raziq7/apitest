import axios from "axios";
import { useEffect, useState } from "react";
import { useDispact } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const [product, setProduct] = useState();
  const [search, setsearch] = useState();
  const [hide, setHide] = useState(true);
  const [searchProduct, setsearchProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    api();
  }, [product]);
  const api = async () => {
    let { data } = await axios.get("https://dummyjson.com/products/1");
    setProduct(data);
  };

  const submitHandlet = async () => {
    console.log(search, "https://dummyjson.com/products/search?q=iPhone%209");

    let { data } = await axios.get(
      `https://dummyjson.com/products/search?=${search}`
    );
    setHide(false);
    console.log(data, "kkkkkkkk");
    setsearchProduct(data);
  };
  const click = () => {
    navigate("/ShowProduct");
  };
  return (
    <>
      {hide == true ? (
        <>
          <form onSubmit={submitHandlet}>
            <input
              type="text"
              name="search"
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <button>Search</button>
          </form>
          <img src={product && product.images[0]} />
          <h1>{product && product.title}</h1>
          <p>{product && product.description}</p>
          <button onClick={click}> Show All Products</button>
        </>
      ) : (
        <>
          <img src={searchProduct && searchProduct.images[0]} />
          <h1>{searchProduct && searchProduct.title}</h1>
          <p>{searchProduct && searchProduct.description}</p>
        </>
      )}
    </>
  );
}
export default Home;
