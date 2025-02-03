"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./utils/logger"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
app_1.default.listen(port, () => {
    logger_1.default.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
exports.default = app_1.default;
//# sourceMappingURL=index.js.map