import { Request, Response, NextFunction } from 'express';

const ErrorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
  
  if (res.headersSent) return next(err);
  const errMsg = err.message || "Something went wrong";
  res.json({
    success: false,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

export default  ErrorHandler;