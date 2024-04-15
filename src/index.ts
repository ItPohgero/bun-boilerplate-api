import server from "bunrest";
import { RouterApp } from "./router/path";
import { Serve } from "./helpers/serve";
export const app = server();

RouterApp();
Serve()

app.listen(5000, () => {
    console.log('App is listening on port 5000');
});