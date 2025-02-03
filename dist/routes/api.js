"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/health', (_req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString()
    });
});
router.get('/data', (_req, res) => {
    res.json({
        message: 'Test data',
        items: []
    });
});
exports.default = router;
//# sourceMappingURL=api.js.map