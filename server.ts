import express, {Express, Request, Response} from "express";
import path from "path";

const app: Express = express();

const PORT = 8080;

/* app.post("/api/drink", (req: Request, res: Response) => {
    res.send({
        "project": "Vending machine server response"
    })
}); */

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})