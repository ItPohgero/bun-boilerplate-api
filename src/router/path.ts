import { app } from "..";
import { TestHandler } from "../app/test/test.handler";

function RouterApp() {
    app.get('/test', (req, res) => {
        TestHandler.GetData(res, req)
    });
}

export { RouterApp }