import { prisma } from "../../setup";
import type { UserRequest } from "./users.types";

export const UsersModel = {
    FindAll: async () => {
        return await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true
            }
        });
    },
    FindOneById: async (id: number) => {
        return await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                name: true
            }
        });
    },
    Create: async (data: UserRequest) => {
        return await prisma.user.create({
            data,
        });
    },
    Update: async (id: number, data: UserRequest) => {
        return await prisma.user.update({
            where: { id },
            data,
        });
    },
    ForceDelete: async (id: number) => {
        return await prisma.user.delete({
            where: { id },
        });
    },
    SoftDelete: async (id: number) => {
        return await prisma.user.update({
            where: { id },
            data: {
                deleted: true,
            },
        });
    },
    Restore: async (id: number) => {
        return await prisma.user.update({
            where: { id },
            data: {
                deleted: false,
            },
        });
    },
}