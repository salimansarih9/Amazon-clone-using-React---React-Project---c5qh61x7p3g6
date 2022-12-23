import React from "react";
import "./Home.css";
import Product from "./Product";
const ProductDetails= [
  {
    id:"12321341",
    title:"Lloyd 1.5 Ton 5 Star Window AC (GLW18B5YWGEW, 100% Copper, White with Golden Deco Strip)",
    price:30990,
    rating: 5,
    image:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Z--VJovmL._SX679_.jpg"
  },
  {
    id:"49538094",
    title:"Amazon Basics Premium 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar, Black & Grey",
    price:2800,
    rating:4,
    image:"https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41bn3nsf9XL._AC_SX184_.jpg"
  },
  {
    id:"4903850",
    title:"iQOO Z6 Lite 5G (Stellar Green, 4GB RAM, 64GB Storage) | World's First Snapdragon 4 Gen 1",
    price: 13999,
    rating:3,
    image:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/4105IiC5tDL._AC_SY200_.jpg"
  },
  {
    id:"23445930",
    title:"TP-Link Archer AC1200 Archer C6 Wi-Fi Speed Up to 867 Mbps/5 GHz + 400 Mbps/2.4 GHz, 5 Gigabit Ports",
    price:2499,
    rating:5,
    image:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/31qAuqb+MDL._AC_SY200_.jpg"
  },
  {
    id:"3254354345",
    title:"HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD",
    price:41990,
    rating:4,
    image:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41YNwaJ91TL._AC_SY200_.jpg"
  },
   {
    id:"90829332",
    title:"LG 22Mk600M 22 Inch (55Cm) LCD Full Hd 1920 X 1080 Pixels Slim IPS Panel Monitor, Hdmi X 2 & Vga Port, 75 Hz, AMD Freesync",
    price:8999,
    rating:4,
    image:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61diEWr2IBL._AC_UY218_.jpg"
  }
]
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png"
          alt=""
        />
        <div className="home__row">
        { ProductDetails.slice(0,2).map(value=>{
        return <Product
            id={value.id}
            title={value.title}
            price={value.price}
            rating={value.rating}
            image={value.image}
          />
         }) }
         </div>
         <div className="home__row">
        { ProductDetails.slice(2,5).map(value=>{
        return <Product
            id={value.id}
            title={value.title}
            price={value.price}
            rating={value.rating}
            image={value.image}
          />
         }) }
         </div>
         <div className="home__row">
        { ProductDetails.slice(5).map(value=>{
        return <Product
            id={value.id}
            title={value.title}
            price={value.price}
            rating={value.rating}
            image={value.image}
          />
         }) }
         </div>
      </div>
    </div>
  );
}

export default Home;
