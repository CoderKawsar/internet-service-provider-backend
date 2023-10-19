"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageAreaController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const coverageArea_service_1 = require("./coverageArea.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const addCoverageArea = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageArea_service_1.CoverageAreaService.addCoverageArea(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage area added successfully!",
        data: result,
    });
}));
const getAllCoverageAreas = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageArea_service_1.CoverageAreaService.getAllCoverageAreas();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "All coverage area fetched successfully!",
        data: result,
    });
}));
const getCoverageAreaById = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageArea_service_1.CoverageAreaService.getCoverageAreaById(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage area fetched successfully!",
        data: result,
    });
}));
const getCoverageAreaByUpazillaOrThanaId = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageArea_service_1.CoverageAreaService.getCoverageAreaByUpazillaOrThanaId(req.params.upazillaOrThanaId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage area fetched of specific upazilla/thana successfully!",
        data: result,
    });
}));
const updateCoverageArea = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageArea_service_1.CoverageAreaService.updateCoverageArea(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage area updated successfully!",
        data: result,
    });
}));
const deleteCoverageArea = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageArea_service_1.CoverageAreaService.deleteCoverageArea(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage area deleted successfully!",
        data: result,
    });
}));
exports.CoverageAreaController = {
    addCoverageArea,
    getAllCoverageAreas,
    getCoverageAreaById,
    getCoverageAreaByUpazillaOrThanaId,
    updateCoverageArea,
    deleteCoverageArea,
};
