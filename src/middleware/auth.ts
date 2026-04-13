import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface jwtPayload {
    id: string;
    username: string;
}

declare global{
    namespace express{
        interface Request{
            subscriber?: jwtPayload
        }
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const examToken = req.cookies.authToken;

        if (!examToken) throw new Error();
    }
    catch{
        return res.status(200).json({message: 'Unauthorized'});
    }
}