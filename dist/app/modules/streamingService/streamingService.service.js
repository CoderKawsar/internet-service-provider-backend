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
exports.StreamingServiceService = exports.deleteStreamingService = exports.updateStreamingService = exports.getStreamingService = exports.getAllStreamingServices = exports.addStreamingService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const addStreamingService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.streamingService.create({
        data: payload,
    });
    return result;
});
exports.addStreamingService = addStreamingService;
const getAllStreamingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.streamingService.findMany({});
    return result;
});
exports.getAllStreamingServices = getAllStreamingServices;
const getStreamingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.streamingService.findFirst({
        where: { id },
    });
    return result;
});
exports.getStreamingService = getStreamingService;
const updateStreamingService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.streamingService.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
exports.updateStreamingService = updateStreamingService;
const deleteStreamingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.streamingService.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.deleteStreamingService = deleteStreamingService;
exports.StreamingServiceService = {
    addStreamingService: exports.addStreamingService,
    getAllStreamingServices: exports.getAllStreamingServices,
    getStreamingService: exports.getStreamingService,
    updateStreamingService: exports.updateStreamingService,
    deleteStreamingService: exports.deleteStreamingService,
};
