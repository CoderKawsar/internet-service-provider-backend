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
exports.StreamingServiceController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const streamingServicesForPackage_service_1 = require("./streamingServicesForPackage.service");
const addOneIntoDB = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield streamingServicesForPackage_service_1.StreamingServicesForPackagesService.addOneIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Streaming service for a package added successfully!",
        data: result,
    });
}));
const getAllFromDB = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield streamingServicesForPackage_service_1.StreamingServicesForPackagesService.getAllFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "All streaming Services for package fetched successfully!",
        data: result,
    });
}));
const getSingleFromDB = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield streamingServicesForPackage_service_1.StreamingServicesForPackagesService.getSingleFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Streaming service for a package fetched successfully!",
        data: result,
    });
}));
const updateOneIntoDB = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield streamingServicesForPackage_service_1.StreamingServicesForPackagesService.updateOneIntoDB(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Streaming service for a package updated successfully!",
        data: result,
    });
}));
const deleteOneFromDB = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield streamingServicesForPackage_service_1.StreamingServicesForPackagesService.deleteOneFromDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Streaming service for a package deleted successfully!",
        data: result,
    });
}));
exports.StreamingServiceController = {
    addOneIntoDB,
    getAllFromDB,
    getSingleFromDB,
    updateOneIntoDB,
    deleteOneFromDB,
};
