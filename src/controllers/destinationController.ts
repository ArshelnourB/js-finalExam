import express, {Request, Response} from 'express';
import Destination from '../models/destination';

export const getDestinations = async (req: Request, res: Response) => {
    const filter = req.query;
    
    const destinations = await Destination.find(filter)

    if(!destinations || destinations.length === 0){return res.status(404).json({message: "No destinations foun"})}

    return res.status(200).json(destinations);
};