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
exports.CoverageUpazillaOrThanaService = exports.deleteCoverageUpazillaOrThana = exports.updateCoverageUpazillaOrThana = exports.getUpazillaOrThanasByDistrictId = exports.getCoverageUpazillaOrThana = exports.getAllCoverageUpazillaOrThanas = exports.addCoverageUpazillaOrThana = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const addCoverageUpazillaOrThana = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageUpazillaOrThana.create({
        data: payload,
        include: {
            district: true,
        },
    });
    return result;
});
exports.addCoverageUpazillaOrThana = addCoverageUpazillaOrThana;
const getAllCoverageUpazillaOrThanas = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageUpazillaOrThana.findMany({
        include: { district: true },
    });
    return result;
});
exports.getAllCoverageUpazillaOrThanas = getAllCoverageUpazillaOrThanas;
const getCoverageUpazillaOrThana = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageUpazillaOrThana.findFirst({
        where: { id },
    });
    return result;
});
exports.getCoverageUpazillaOrThana = getCoverageUpazillaOrThana;
const getUpazillaOrThanasByDistrictId = (districtId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageUpazillaOrThana.findMany({
        where: { districtId: districtId },
    });
    return result;
});
exports.getUpazillaOrThanasByDistrictId = getUpazillaOrThanasByDistrictId;
const updateCoverageUpazillaOrThana = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageUpazillaOrThana.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
exports.updateCoverageUpazillaOrThana = updateCoverageUpazillaOrThana;
const deleteCoverageUpazillaOrThana = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageUpazillaOrThana.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.deleteCoverageUpazillaOrThana = deleteCoverageUpazillaOrThana;
exports.CoverageUpazillaOrThanaService = {
    addCoverageUpazillaOrThana: exports.addCoverageUpazillaOrThana,
    getAllCoverageUpazillaOrThanas: exports.getAllCoverageUpazillaOrThanas,
    getCoverageUpazillaOrThana: exports.getCoverageUpazillaOrThana,
    getUpazillaOrThanasByDistrictId: exports.getUpazillaOrThanasByDistrictId,
    updateCoverageUpazillaOrThana: exports.updateCoverageUpazillaOrThana,
    deleteCoverageUpazillaOrThana: exports.deleteCoverageUpazillaOrThana,
};
