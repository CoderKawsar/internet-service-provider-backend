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
const streamingService_service_1 = require("./streamingService.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const addStreamingService = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield streamingService_service_1.StreamingServiceService.addStreamingService(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Streaming service added successfully!",
        data: result,
    });
}));
const getAllStreamingServices = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield streamingService_service_1.StreamingServiceService.getAllStreamingServices();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "All streaming Service fetched successfully!",
        data: result,
    });
}));
const getStreamingService = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield streamingService_service_1.StreamingServiceService.getStreamingService(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Streaming service fetched successfully!",
        data: result,
    });
}));
const updateStreamingService = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield streamingService_service_1.StreamingServiceService.updateStreamingService(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Streaming service updated successfully!",
        data: result,
    });
}));
const deleteStreamingService = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield streamingService_service_1.StreamingServiceService.deleteStreamingService(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Streaming service deleted successfully!",
        data: result,
    });
}));
exports.StreamingServiceController = {
    addStreamingService,
    getAllStreamingServices,
    getStreamingService,
    updateStreamingService,
    deleteStreamingService,
};
