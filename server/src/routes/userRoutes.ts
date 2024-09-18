// IMPORTS
import { Router } from "express";

// LOCAL IMPORTS
import { getUsers } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);

export default router;
