import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // ritorna l'id decodificato dato che il JWT viene creato con l'id dell'utente
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // vado a trovare l'utente con l'id trovato e faccio in modo che dal database non venga recuperata la password
      // vado ad aggiungere alla richiesta che dovrà utilizzare il prossimo livello di middleware un campo user in modo da poter continuare ad avere l'id dell'utente che ha contattato il server
      
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an Admin");
  }
};
export { protect, admin };

//cio