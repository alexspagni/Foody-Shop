import express from "express";
import asyncHandler from "express-async-handler";
import { admin, protect } from "../Middleware/AuthMiddleware.js";
import Order from "../Models/OrderModel.js";
import Product from "../Models/ProductModel.js";

const orderRouter = express.Router();

// CREA UN ORDINE
orderRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
      return;
    } else {
      for (let i=0;i<orderItems.length;i++){

        const product= await Product.findById(orderItems[i].product)
        product.countInStock=product.countInStock-orderItems[i].qty
        product.save();
      }
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        // nel caso inserisci itemsPrice qui se NON FUNZIONA QUI
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const createOrder = await order.save();
      // in create order si avrà anche l'id dell'ordine
      res.status(201).json(createOrder);
    }
  })
);
//ì RECUPERA ORDINI UTENTI
orderRouter.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    // vado ad estrarre tutti gli ordini che hanno come campo id pari all'id dell'utente che sta facendo il fetch degli ordini
    const order = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(order);
  })
);

// RECUPERA UN SINGOLO ORDINE IN BASE AL SUO ID
orderRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

// PAGA ORDINE
orderRouter.put(
  "/:id/pay",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);


export default orderRouter;
