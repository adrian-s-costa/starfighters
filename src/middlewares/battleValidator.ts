import battleSchema from "../schemas/battleSchema.js";
import { Request, Response, NextFunction} from "express";

export async function battleValidator(req: Request, res: Response, next: NextFunction){
    const users = req.body;
    const validation = battleSchema.validate(users)

    if (validation.error){
        return res.sendStatus(422);
    }
    
    return next();
}