import { app } from "..";
import { UsersHandler } from "../app/users/users.handler";

function RouterApp() {
    app.get('/users', (req, res) => UsersHandler.GetAll(res, req));
    app.get('/user/:id', (req, res) => UsersHandler.GetOne(res, req));
    app.post('/user/create', (req, res) => UsersHandler.Create(res, req));
}

export { RouterApp }