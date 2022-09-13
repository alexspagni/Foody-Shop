import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import OrderMain from "../components/orders/OrderMain";

//Pagina principale degli ordini nel pannello Admin. Richiama come sempre sidebar, header e OrderMain che mostra gli ordini che sono stati effettuati 
const OrderScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderMain />
      </main>
    </>
  );
};

export default OrderScreen;
