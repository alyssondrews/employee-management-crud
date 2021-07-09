import { Response } from "express";

export const ProcessError = (res: Response, err: any) => {
    // console.log(err);
    const statusCode = err.status ? err.status : 500;
    let status = null;
    if (err.status) {
        status = {
            code: err.status,
            message: err.message,
        };
    }

    return res.status(statusCode).send({ status });
};
