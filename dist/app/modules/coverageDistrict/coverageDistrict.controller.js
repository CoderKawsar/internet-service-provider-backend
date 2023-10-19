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
exports.CoverageDistrictController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const coverageDistrict_service_1 = require("./coverageDistrict.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const addCoverageDistrict = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageDistrict_service_1.CoverageDistrictService.addCoverageDistrict(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage district added successfully!",
        data: result,
    });
}));
const getAllCoverageDistricts = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageDistrict_service_1.CoverageDistrictService.getAllCoverageDistricts();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "All coverage districts fetched successfully!",
        data: result,
    });
}));
const getCoverageDistrict = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageDistrict_service_1.CoverageDistrictService.getCoverageDistrict(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage district fetched successfully!",
        data: result,
    });
}));
const updateCoverageDistrict = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageDistrict_service_1.CoverageDistrictService.updateCoverageDistrict(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage district updated successfully!",
        data: result,
    });
}));
const deleteCoverageDistrict = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coverageDistrict_service_1.CoverageDistrictService.deleteCoverageDistrict(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Coverage district deleted successfully!",
        data: result,
    });
}));
exports.CoverageDistrictController = {
    addCoverageDistrict,
    getAllCoverageDistricts,
    getCoverageDistrict,
    updateCoverageDistrict,
    deleteCoverageDistrict,
};
