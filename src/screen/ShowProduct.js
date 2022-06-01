import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCartAction, proDetailsAction } from "../action/productAction";
import { BsFillCartCheckFill } from "react-icons/bs";

function ShowProduct() {
  const dispatch = useDispatch();
  const [showPro, setShowPro] = useState([]);
  const [dataPro, setDataPro] = useState([]);
  const [search, setsearch] = useState();
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [qtyPro, setQtyPro] = useState(0);
  useEffect(() => {
    api();
  }, []);
  const api = async () => {
    let { data } = await axios.get(
      "https://dummyjson.com/products/category/smartphones"
    );
    console.log(data.products);
    setShowPro(data.products);
  };

  const click = (data) => {
    console.log(data, "========");
    dispatch(proDetailsAction(data));
    navigate("/proDetails");
  };

  const Cartclick = (data) => {
    setQtyPro(qtyPro + 1);
    setDataPro([...dataPro, data]);
  };
  const submitHandlet = async (e) => {
    e.preventDefault();
    showPro.filter((data) => {
      if (data.title === search || data.brand === search) {
        setShowPro([data]);
      }
    });
  };

  return (
    <>
      <form onSubmit={submitHandlet}>
        <input
          type="text"
          name="search"
          style={{ border: "1px solid" }}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <button style={{ backgroundColor: "blue" }}>Search</button>
      </form>

      <BsFillCartCheckFill
        onClick={() => {
          dispatch(addToCartAction(dataPro));
          navigate("/addToCart");
        }}
      />
      <p>{error}</p>
      <p>{qtyPro}</p>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>description</th>
          <th>Brand</th>
          <th>Action</th>
        </tr>
        <tbody>
          {showPro.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{data.brand}</td>
                <td>
                  <button
                    onClick={() => {
                      click(data);
                    }}
                    style={{ color: "green" }}
                  >
                    show details
                  </button>
                  <button
                    onClick={() => {
                      Cartclick(data);
                    }}
                    style={{ color: "red" }}
                  >
                    Add To Cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ShowProduct;
