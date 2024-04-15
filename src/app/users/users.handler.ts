import type { BunRequest } from "bunrest/src/server/request";
import type { BunResponse } from "bunrest/src/server/response";
import { UsersModel } from "./users.model";

export const UsersHandler = {
    GetData: async (res: BunResponse, req: BunRequest) => {
        const response = await UsersModel.FindAll()
        res.
            status(200).json({
                "count": response
        });
    }
}