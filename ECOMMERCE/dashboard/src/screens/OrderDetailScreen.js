import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import OrderDetailmain from "../components/orders/OrderDetailmain";

//Pagina di analisi dettaglio del prodotto. Richiama (oltre a sidebar e Header come tutte le pagine nella cartella screen) OrderDetailMain che fa visualizzare i dettagli dei prodotti
const OrderDetailScreen = ({ match }) => {
  const orderId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderDetailmain orderId={orderId} />
      </main>
    </>
  );
};

export default OrderDetailScreen;
