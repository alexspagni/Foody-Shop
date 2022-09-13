import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import UserComponent from "../components/users/UserComponent";

//Pagina di esposizione degli utenti registrati al sito. Richiama Sidebar, Header e la pagina UserComponent che serve per mostrare gli utenti
const UsersScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <UserComponent />
      </main>
    </>
  );
};

export default UsersScreen;
