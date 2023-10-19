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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageService = exports.deletePackage = exports.updatePackage = exports.getPackageById = exports.getAllPackages = exports.addPackage = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const package_constants_1 = require("./package.constants");
const addPackage = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.package.create({
        data: payload,
    });
    return result;
});
exports.addPackage = addPackage;
const getAllPackages = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(paginationOptions);
    const { searchTerm } = filters, filterData = __rest(filters, ["searchTerm"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: package_constants_1.packageSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive",
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: parseInt(filterData[key]),
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = yield prisma_1.default.package.findMany({
        include: {
            StreamingServicesForPackage: {
                include: {
                    streamingService: true,
                },
            },
        },
        where: whereConditions,
        skip,
        take: limit,
        orderBy: paginationOptions.sortBy && paginationOptions.sortOrder
            ? { [paginationOptions.sortBy]: paginationOptions.sortOrder }
            : {
                speed: "asc",
            },
    });
    const total = yield prisma_1.default.package.count({
        where: whereConditions,
    });
    return {
        meta: {
            total,
            page,
            limit,
        },
        data: result,
    };
});
exports.getAllPackages = getAllPackages;
const getPackageById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.package.findFirst({
        where: { id },
    });
    return result;
});
exports.getPackageById = getPackageById;
const updatePackage = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.package.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
exports.updatePackage = updatePackage;
const deletePackage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.package.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.deletePackage = deletePackage;
exports.PackageService = {
    addPackage: exports.addPackage,
    getAllPackages: exports.getAllPackages,
    getPackageById: exports.getPackageById,
    updatePackage: exports.updatePackage,
    deletePackage: exports.deletePackage,
};
