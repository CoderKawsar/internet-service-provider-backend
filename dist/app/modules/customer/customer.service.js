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
exports.CustomerService = exports.deleteCustomer = exports.updateCustomer = exports.getCustomerByUserId = exports.getCustomerById = exports.getAllCustomers = exports.addCustomer = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const addCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.create({
        data: payload,
    });
    return result;
});
exports.addCustomer = addCustomer;
const getAllCustomers = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(paginationOptions);
    const andConditions = [];
    if (Object.keys(filters).length > 0) {
        andConditions.push({
            AND: Object.keys(filters).map((key) => ({
                [key]: {
                    equals: filters[key],
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = yield prisma_1.default.customer.findMany({
        include: {
            user: true,
        },
        where: whereConditions,
        skip,
        take: limit,
        orderBy: paginationOptions.sortBy && paginationOptions.sortOrder
            ? { [paginationOptions.sortBy]: paginationOptions.sortOrder }
            : {
                createdAt: "desc",
            },
    });
    const total = yield prisma_1.default.customer.count({
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
exports.getAllCustomers = getAllCustomers;
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findFirst({
        where: { id },
        include: {
            user: true,
        },
    });
    return result;
});
exports.getCustomerById = getCustomerById;
const getCustomerByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findFirst({
        where: { userId: userId },
        include: {
            user: true,
            package: true,
        },
    });
    return result;
});
exports.getCustomerByUserId = getCustomerByUserId;
const updateCustomer = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.deleteCustomer = deleteCustomer;
exports.CustomerService = {
    addCustomer: exports.addCustomer,
    getAllCustomers: exports.getAllCustomers,
    getCustomerById: exports.getCustomerById,
    getCustomerByUserId: exports.getCustomerByUserId,
    updateCustomer: exports.updateCustomer,
    deleteCustomer: exports.deleteCustomer,
};
