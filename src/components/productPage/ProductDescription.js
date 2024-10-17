import React from "react";
import "./productdesc.css";

export default function ProductDescription({ product }) {
  // const { description, desattributes } = product;

  return (
    <div class="prodowncont">
      <div class="prodownsub">
        <div class="headingcont">Product Description</div>
        <hr />
        <div class="desccontent">
          <div class="desccontentpara">
            <strong>About this item: </strong>
            <br />
            <p className="">{`${product.description}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
