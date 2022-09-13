import React from "react";
import Header from "../components/Header";
import Main from "../components/Home/Main";
import Sidebar from "./../components/sidebar";

//Pagina principale. La raggiungi appena accedi al pannello. Richiamo la sidebar a sinistra, l'header in alto e la pagina principale vera e propria contenuta nel main
const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Main />
      </main>
    </>
  );
};

export default HomeScreen;
