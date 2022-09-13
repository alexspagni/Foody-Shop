import express from "express";
import dotenv from "dotenv";
import ConnessioneAlDatabase from "./config/ConnessioneAlDatabase.js";
import ImportData from "./DataImport.js";
import RouteProdotti from "./Routes/RoutesProdotti.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import RouterUtenti from "./Routes/RoutesUser.js";
import RouterOrdini from "./Routes/RoutesOrdini.js";

dotenv.config();
ConnessioneAlDatabase(); //mi connetto al database 
const app = express();
app.use(express.json()); 

// API
app.use("/api/import", ImportData); //inserisco prodotti e utenti nel database
app.use("/api/products", RouteProdotti); //api prodotti
app.use("/api/users", RouterUtenti); //api utenti
app.use("/api/orders", RouterOrdini); //api ordini 
app.get("/api/config/paypal", (req, res) => { //api pagamento
  res.send(process.env.PAYPAL_CLIENT_ID); 
});

// Gestore degli errori
app.use(notFound);// questo middelware viene eseguito quando nessuna route viene raggiunta
app.use(errorHandler);// questo middelware è quelle personalizzato per la gestione degli errori

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`)); //metto il server in ascolto sulla porta 5000
