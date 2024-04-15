import { app } from "..";
import { UsersHandler } from "../app/users/users.handler";

function RouterApp() {
    app.get('/users', (req, res) => UsersHandler.GetData(res, req));
}

export { RouterApp }