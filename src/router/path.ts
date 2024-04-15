import { app } from "..";

function RouterApp() {
    app.get('/test', (req, res) => {
        res.status(200).json({ message: req.query });
    });
}

export { RouterApp }