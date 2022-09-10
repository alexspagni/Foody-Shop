import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";

dotenv.config();
connectDatabase(); //mi connetto al database 
const app = express();
app.use(express.json()); 

// API
app.use("/api/import", ImportData); //inserisco prodotti e utenti nel database
app.use("/api/products", productRoute); //api prodotti
app.use("/api/users", userRouter); //api utenti
app.use("/api/orders", orderRouter); //api ordini 
app.get("/api/config/paypal", (req, res) => { //api pagamento
  res.send(process.env.PAYPAL_CLIENT_ID); 
});

// ERROR HANDLER
app.use(notFound);// questo middelware viene eseguito quando nessuna route viene raggiunta
app.use(errorHandler);// questo middelware è quelle personalizzato per la gestione degli errori

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`)); //metto il server in ascolto sulla porta 5000
