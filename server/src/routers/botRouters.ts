import { Router } from "express";
import { play, skip } from "../controllers/botController";
import { ValidatorMiddleware } from "../middlewares/validator";

export const botRouter = Router();

botRouter.post("/play", ValidatorMiddleware, play);

botRouter.put("/skip", ValidatorMiddleware, skip);

export default botRouter;
