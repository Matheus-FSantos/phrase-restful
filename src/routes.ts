import { Router } from "express";
import PhraseController from "./controller/PhraseController";

const router = Router();
const phraseController: PhraseController = new PhraseController();


router.get("/phrases", phraseController.findAll );
router.get("/phrases/:id", phraseController.findById );
router.post("/prases", phraseController.save );
router.put("/phrases/:id", phraseController.update );
router.delete("/phrases/:id", phraseController.delete );

export default router;