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
exports.CoverageUpazillaOrThanaController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const coverageUpazillaOrThana_service_1 = require("./coverageUpazillaOrThana.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const addCoverageUpazillaOrThana = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageUpazillaOrThana_service_1.CoverageUpazillaOrThanaService.addCoverageUpazillaOrThana(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage upazilla/thana added successfully!",
        data: result,
    });
}));
const getAllCoverageUpazillaOrThanas = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageUpazillaOrThana_service_1.CoverageUpazillaOrThanaService.getAllCoverageUpazillaOrThanas();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "All coverage upazilla/thanas fetched successfully!",
        data: result,
    });
}));
const getCoverageUpazillaOrThana = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageUpazillaOrThana_service_1.CoverageUpazillaOrThanaService.getCoverageUpazillaOrThana(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage upazilla/thana fetched successfully!",
        data: result,
    });
}));
const getUpazillaOrThanasByDistrictId = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageUpazillaOrThana_service_1.CoverageUpazillaOrThanaService.getUpazillaOrThanasByDistrictId(req.params.districtId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "This district's coverage upazilla/thanas fetched successfully!",
        data: result,
    });
}));
const updateCoverageUpazillaOrThana = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageUpazillaOrThana_service_1.CoverageUpazillaOrThanaService.updateCoverageUpazillaOrThana(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage upazilla/thana updated successfully!",
        data: result,
    });
}));
const deleteCoverageUpazillaOrThana = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageUpazillaOrThana_service_1.CoverageUpazillaOrThanaService.deleteCoverageUpazillaOrThana(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage upazilla/thana deleted successfully!",
        data: result,
    });
}));
exports.CoverageUpazillaOrThanaController = {
    addCoverageUpazillaOrThana,
    getAllCoverageUpazillaOrThanas,
    getCoverageUpazillaOrThana,
    getUpazillaOrThanasByDistrictId,
    updateCoverageUpazillaOrThana,
    deleteCoverageUpazillaOrThana,
};
