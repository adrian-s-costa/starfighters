import { Request, Response } from "express";
import { battlePost } from "../services/battleService.js";

export async function battleResponse(req: Request, res: Response){
    try{
        const users = req.body;
        const response = await battlePost(users);
        return res.sendStatus(201);
    }catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}
