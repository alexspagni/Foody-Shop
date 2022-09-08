import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import AddProductMain from "./../components/products/AddProductMain";

//Pagina di aggiunta del prodotto. Richiama AddproductMain grazie alla quale avviene l'aggiunta vera e propria
const AddProduct = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddProductMain />
      </main>
    </>
  );
};

export default AddProduct;
