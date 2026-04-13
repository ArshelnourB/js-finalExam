import express, { Request, Response} from "express";
import { Subscriber } from "../models/subscriber";
import jwt from 'jsonwebtoken';

export const generateToken = (user:any): string => {
    const payload = {
        username: Subscriber.username;
    }

    const jwtOptions = { expiresIn: 60*60};

    return jwt.sign(payload, process.env.PASSPORT_SECRET, jwt.options);
}

export const subscribe = async (req: Request, res: Response) => {
    try {
        //const subscriber = new Subscriber({ });

        
    }
};

export const signIn = async (req: Request, res: Response) => {

};