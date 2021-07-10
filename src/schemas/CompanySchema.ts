import { Request, Response, NextFunction } from "express";
import { validateBody } from "../utils/schemaValidator";
import * as Joi from 'joi';

export const validateCreateCompany = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void | Response> => {
    const schema = Joi.object().keys({
        name: Joi.string().required().messages({
            "any.required": "the field 'name' is required",
        }),
        cnpj: Joi.string().required().messages({
            "any.required": "the field 'cnpj' is required",
        }),
        address: Joi.string().required().messages({
            "any.required": "the field 'address' is required",
        }),
    });
    try {
        await validateBody(req, next, schema);
    } catch (error) {
        return res.status(422).send(error);
    }
};
