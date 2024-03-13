import express from "express";
import { createCalculationHandler, getCalculationHandler } from "./calculationController.js";

const appRouter = express.Router();

appRouter.post(`/create`, createCalculationHandler);
appRouter.get(`/`, getCalculationHandler);



export default appRouter;
