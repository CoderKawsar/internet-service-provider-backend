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
exports.CoverageAreaService = exports.deleteCoverageArea = exports.updateCoverageArea = exports.getCoverageAreaByUpazillaOrThanaId = exports.getCoverageAreaById = exports.getAllCoverageAreas = exports.addCoverageArea = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const addCoverageArea = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageArea.create({
        data: payload,
    });
    return result;
});
exports.addCoverageArea = addCoverageArea;
const getAllCoverageAreas = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageArea.findMany({
        include: {
            upazillaOrThana: {
                include: {
                    district: true,
                },
            },
        },
    });
    return result;
});
exports.getAllCoverageAreas = getAllCoverageAreas;
const getCoverageAreaById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageArea.findFirst({
        where: { id },
        include: {
            upazillaOrThana: {
                include: {
                    district: true,
                },
            },
        },
    });
    return result;
});
exports.getCoverageAreaById = getCoverageAreaById;
const getCoverageAreaByUpazillaOrThanaId = (upazillaOrThanaId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageArea.findMany({
        where: { upazillaOrThanaId },
        include: {
            upazillaOrThana: {
                include: {
                    district: true,
                },
            },
        },
    });
    return result;
});
exports.getCoverageAreaByUpazillaOrThanaId = getCoverageAreaByUpazillaOrThanaId;
const updateCoverageArea = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageArea.update({
        where: {
            id,
        },
        data: payload,
        include: {
            upazillaOrThana: {
                include: {
                    district: true,
                },
            },
        },
    });
    return result;
});
exports.updateCoverageArea = updateCoverageArea;
const deleteCoverageArea = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageArea.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.deleteCoverageArea = deleteCoverageArea;
exports.CoverageAreaService = {
    addCoverageArea: exports.addCoverageArea,
    getAllCoverageAreas: exports.getAllCoverageAreas,
    getCoverageAreaById: exports.getCoverageAreaById,
    getCoverageAreaByUpazillaOrThanaId: exports.getCoverageAreaByUpazillaOrThanaId,
    updateCoverageArea: exports.updateCoverageArea,
    deleteCoverageArea: exports.deleteCoverageArea,
};
