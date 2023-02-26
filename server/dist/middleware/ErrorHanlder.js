"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler = (err, req, res, next) => {
    if (res.headersSent)
        return next(err);
    const errMsg = err.message || "Something went wrong";
    res.json({
        success: false,
        message: errMsg,
        stack: process.env.NODE_ENV === "development" ? err.stack : {},
    });
};
exports.default = ErrorHandler;
