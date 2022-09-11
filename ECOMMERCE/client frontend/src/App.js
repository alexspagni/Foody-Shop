import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Prodotto from "./screens/Prodotto";
import Login from "./screens/Login";
import Registrazione from "./screens/Registazione";
import Carrello from "./screens/Carrello";
import Spedizione from "./screens/Spedizione";
import Profilo from "./screens/ProfiloUtente";
import Pagamento from "./screens/Pagamento";
import CondermaOrdine from "./screens/ConfermaOrdine";
import Ordine from "./screens/Ordini";
import NotFound from "./screens/PaginaNonTrovata";
import Autentication from "./Autentication";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={Home} exact />
        <Route
          path="/search/:keyword"
          component={Home}
          exact
        />
        <Route path="/products/:id" component={Prodotto} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registrazione} />
        <Autentication path="/profile" component={Profilo} />
        <Route path="/cart/:id?" component={Carrello} />
        <Autentication path="/shipping" component={Spedizione} />
        <Autentication path="/payment" component={Pagamento} />
        <Autentication path="/placeorder" component={CondermaOrdine} />
        <Autentication path="/order/:id" component={Ordine} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
