import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  createListing,
  deleteAlisting,
  getAListing,
  getListings,
  updateListing,
} from "../controllers/listing.controller.js";

const router = express.Router();

router.post("/create", verifyUser, createListing);
router.delete("/:id", verifyUser, deleteAlisting);
router.post("/update/:id", verifyUser, updateListing);
router.get("/getAlisting/:id", getAListing);
router.get("/get", getListings);

export default router;
