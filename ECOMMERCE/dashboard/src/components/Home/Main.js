import React from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LatestOrder";
import { useSelector } from "react-redux";

const Main = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
        </div>
        {/* Richiama la pagina ./TopTotal al cui interno viene calcolato e mostrato il totale delle vendite, del numero acquisti e di prodotti*/}
        <TopTotal orders={orders} products={products} />

        {/*Richiama la pagina ./LatestOrder grazie alla quale vengono elencati i nuovi ordini*/}
        <div className="card mb-4 shadow-sm">
          <LatestOrder orders={orders} loading={loading} error={error} />
        </div>
      </section>
    </>
  );
};

export default Main;
