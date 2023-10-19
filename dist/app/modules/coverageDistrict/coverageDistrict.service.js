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
exports.CoverageDistrictService = exports.deleteCoverageDistrict = exports.updateCoverageDistrict = exports.getCoverageDistrict = exports.getAllCoverageDistricts = exports.addCoverageDistrict = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const addCoverageDistrict = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageDistrict.create({
        data: payload,
    });
    return result;
});
exports.addCoverageDistrict = addCoverageDistrict;
const getAllCoverageDistricts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageDistrict.findMany({});
    return result;
});
exports.getAllCoverageDistricts = getAllCoverageDistricts;
const getCoverageDistrict = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageDistrict.findFirst({
        where: { id },
    });
    return result;
});
exports.getCoverageDistrict = getCoverageDistrict;
const updateCoverageDistrict = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageDistrict.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
exports.updateCoverageDistrict = updateCoverageDistrict;
const deleteCoverageDistrict = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.coverageDistrict.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.deleteCoverageDistrict = deleteCoverageDistrict;
exports.CoverageDistrictService = {
    addCoverageDistrict: exports.addCoverageDistrict,
    getAllCoverageDistricts: exports.getAllCoverageDistricts,
    getCoverageDistrict: exports.getCoverageDistrict,
    updateCoverageDistrict: exports.updateCoverageDistrict,
    deleteCoverageDistrict: exports.deleteCoverageDistrict,
};
