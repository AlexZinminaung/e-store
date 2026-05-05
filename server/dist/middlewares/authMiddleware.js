"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json({ message: "No token" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded; // attach user to request
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
module.exports = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map