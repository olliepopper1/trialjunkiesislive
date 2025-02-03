"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = void 0;
const errorHandler = (err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ message: err.message || 'Internal Server Error' });
};
exports.errorHandler = errorHandler;
function notFoundHandler(_req, res, _next) {
    return res.status(404).json({ error: 'Route not found' });
}
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=errorHandler.js.map