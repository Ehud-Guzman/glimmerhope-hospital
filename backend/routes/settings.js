import express from "express";
import { getSettings, saveSettings } from "../controllers/settings.controller.js";

const router = express.Router();

router.get("/:section", getSettings);
router.post("/:section", saveSettings);

export default router;
