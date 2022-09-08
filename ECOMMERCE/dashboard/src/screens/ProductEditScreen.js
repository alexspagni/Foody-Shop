import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import EditProductMain from "./../components/products/EditproductMain";

//Pagina di aggiornamento prodotto. Richiama oltre a sidebar e header la pagina EditproductMain che aggiorna i dettagli del prodotto. Gli passa l'id del prodotto corrente
const ProductEditScreen = ({ match }) => {
  const productId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain productId={productId} />
      </main>
    </>
  );
};
export default ProductEditScreen;
