import { Request, Response, NextFunction } from "express";
import { validateBody } from "../utils/schemaValidator";
import * as Joi from 'joi';

export const validateCreateEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void | Response> => {
    const schema = Joi.object().keys({
        name: Joi.string().required().messages({
            "any.required": "the field 'name' is required",
        }),
        cpf: Joi.string().required().messages({
            "any.required": "the field 'cpf' is required",
        }),
        email: Joi.string().required().messages({
            "any.required": "the field 'email' is required",
        }),
        address: Joi.string().required().messages({
            "any.required": "the field 'address' is required",
        }),
        company: Joi.number().required().messages({
            "any.required": "the field 'company' is required",
        })
    });
    try {
        await validateBody(req, next, schema);
    } catch (error) {
        return res.status(422).send(error);
    }
};
