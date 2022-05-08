import { NextFunction, Request, Response } from "express";

export const ValidatorMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { userId } = req.body;
	if (userId) {
		return next();
	} else {
		console.log("UNAUTHENTICATED");
	}
};
