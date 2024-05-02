import React from "react";
import Heading from "../Shared/Heading";
import ProductsCard from "./ProductsCard";

// Images import
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import Img9 from "../../assets/product/p-9.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "$120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Smart Watch",
    price: "$420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Rocky Mountain Headphone",
    price: "$320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed Headphone",
    price: "$220",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: "$120",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Boat Headphone",
    price: "$420",
    aosDelay: "200",
  },
  {
    id: 9,
    img: Img9,
    title: "Goggle Headphone",
    price: "$320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Laptop Headphone",
    price: "$220",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section  */}
        <Heading
          title="Our Products"
          subtitle={"Explore our latest products"}
        />
        {/* Body section  */}
        <ProductsCard data={ProductsData} />
        <ProductsCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
