import { Router } from "express";
import { indexController } from "../controllers/index.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Index
 *  description: Index endpoints
 */

/**
 * @swagger
 * /api:
 *  get:
 *    summary: Get List of users
 *    tags: [Index]
 *    responses:
 *      200:
 *        description: Creado
 *      400:
 *        description: Bad request
 */
router.get("/api", indexController);

export default router;
