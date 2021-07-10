import * as Joi from 'joi';
import { Request, NextFunction } from "express";

export const validateBody = async (req: Request, next: NextFunction, schema: Joi.Schema): Promise<void | any> => {
    try {
        await Joi.assert(req.body, schema, { abortEarly: false });
        return next();
    } catch (error) {
        const { details } = error;
        const message = details.map((i: any) => i.message);
        throw { status: { code: 422, message } };
    }
};
