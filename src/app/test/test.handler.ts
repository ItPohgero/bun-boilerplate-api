import type { BunRequest } from "bunrest/src/server/request";
import type { BunResponse } from "bunrest/src/server/response";
import { TestModel } from "./test.model";

export const TestHandler = {
    GetData: (res: BunResponse, req: BunRequest) => {
        const response = TestModel.GetList()
        res.status(200).json({ message: response });
    }
}