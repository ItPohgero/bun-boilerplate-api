import type { BunRequest } from "bunrest/src/server/request";
import type { BunResponse } from "bunrest/src/server/response";
import { UsersModel } from "./users.model";
import { Response } from "../../helpers/response";
import type { UserRequest } from "./users.types";

export const UsersHandler = {
    GetAll: async (res: BunResponse, req: BunRequest) => {
        try {
            const response = await UsersModel.FindAll()
            Response(res)?.
                Json200WithData({
                    data: response
                })
        } catch (error) {
            Response(res).Json500({ message: error })
        }
    },
    GetOne: async (res: BunResponse, req: BunRequest) => {
        try {
            const id = req?.params?.id
            const response = await UsersModel.FindOneById(Number(id))
            Response(res)?.
                Json200WithData({
                    data: response
                })
        } catch (error) {
            Response(res).Json500({ message: error })
        }
    },
    Create: async (res: BunResponse, req: BunRequest) => {
        try {
            const body: UserRequest | any = req.body;
            await UsersModel.Create(body)
            Response(res)?.Json201({})
        } catch (error) {
            Response(res).Json500({ message: error })
        }
    },
}