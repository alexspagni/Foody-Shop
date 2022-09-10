const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  console.log("sono qui")
  res.status(404);
  next(error);// attraverso next( error) viene chiamato la funzione errorHandler 

};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
