import type { BunRequest } from "bunrest/src/server/request";
import type { BunResponse } from "bunrest/src/server/response";
import { UsersModel } from "./users.model";
import { Response } from "../../helpers/response";
import type { UserRequest } from "./users.types";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import PrismaErrorToHttpResponse from "../../validation/prisma-error";
import { ValidationCheck } from "../../validation/check";

export const UsersHandler = {
    GetAll: async (res: BunResponse, req: BunRequest) => {
        try {
            const response = await UsersModel.FindAll()
            return Response(res)?.
                Json200WithData({
                    data: response
                })
        } catch (error) {
            return Response(res).Json500({ message: error })
        }
    },
    GetOne: async (res: BunResponse, req: BunRequest) => {
        try {
            const id = req?.params?.id
            const response = await UsersModel.FindOneById(Number(id))
            return Response(res)?.
                Json200WithData({
                    data: response
                })
        } catch (error) {
            return Response(res).Json500({ message: error })
        }
    },
    Create: async (res: BunResponse, req: BunRequest) => {
        const body: UserRequest | any = req?.body;
        const { success, error } = ValidationCheck(body, {
            email: ['required', 'email'],
            name: ['required']
        });
        if (!success) {
            return Response(res).JsonValidationError({ data: error });
        }

        try {
            await UsersModel.Create(body)
            return Response(res)?.Json201({})
        } catch (error: any) {
            if (error instanceof PrismaClientKnownRequestError) {
                const data = PrismaErrorToHttpResponse(error);
                return Response(res).JsonValidationError({ data })
            }
            return Response(res).JsonValidationError({ data: error?.message })
        }
    },
}