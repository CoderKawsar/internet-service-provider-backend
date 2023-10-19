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
exports.StreamingServicesForPackagesService = exports.deleteOneFromDB = exports.updateOneIntoDB = exports.getSingleFromDB = exports.getAllFromDB = exports.addOneIntoDB = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const addOneIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.streamingServicesForPackage.create({
        data: payload,
    });
    return result;
});
exports.addOneIntoDB = addOneIntoDB;
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.streamingServicesForPackage.findMany({
        include: {
            streamingService: true,
        },
    });
    return result;
});
exports.getAllFromDB = getAllFromDB;
const getSingleFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.streamingServicesForPackage.findFirst({
        where: { id },
    });
    return result;
});
exports.getSingleFromDB = getSingleFromDB;
const updateOneIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.streamingServicesForPackage.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
exports.updateOneIntoDB = updateOneIntoDB;
const deleteOneFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.streamingServicesForPackage.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.deleteOneFromDB = deleteOneFromDB;
exports.StreamingServicesForPackagesService = {
    addOneIntoDB: exports.addOneIntoDB,
    getAllFromDB: exports.getAllFromDB,
    getSingleFromDB: exports.getSingleFromDB,
    updateOneIntoDB: exports.updateOneIntoDB,
    deleteOneFromDB: exports.deleteOneFromDB,
};
