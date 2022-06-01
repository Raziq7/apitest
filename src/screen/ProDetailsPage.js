import React from "react";
import { useSelector } from "react-redux";

function ProDetailsPage() {
  const { Details } = useSelector((state) => {
    return state.proDtails;
  });
  console.log(Details, "555555555565465465");
  return (
    <div style={{ alignItems: "center" }}>
      <img
        src={Details && Details.thumbnail}
        alt="logo"
        style={{ width: "40%", textAlign: "center" }}
      />
      <div class="container">
        <h4>
          <b>{Details && Details.title}</b> <br />
          <b>Brand:{Details && Details.brand}</b>
        </h4>
        <p>{Details && Details.description}</p>
        <p>₹{Details && Details.price}</p>
        <button>Add to</button>
      </div>
    </div>
  );
}

export default ProDetailsPage;
