// IMPORTS
import { Router } from "express";

// LOCAL IMPORTS
import { getTeams } from "../controllers/teamController";

const router = Router();

router.get("/", getTeams);

export default router;
