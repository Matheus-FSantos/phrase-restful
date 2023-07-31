import { Router, Request, Response } from "express";
const router = Router();

router.get("/random-number", (request: Request, response: Response) => {
    let randomNumber: Number = Math.floor(Math.random() * 1000);
    
    response.status(200).json(
        {
            random_number: randomNumber
        }
    );
});

router.get("/name/:name", (request: Request, response: Response) => {
    let name: String = request.params.name;

    response.status(200).json(
        {
            sended_name: name
        }
    );
});

export default router;