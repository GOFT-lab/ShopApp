import express from "express";
import {
  addOrderItems,
  getOrderItemsById,
  updateOrderItemsToPaid,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderItemsById);
router.route("/:id/pay").put(protect, updateOrderItemsToPaid);

export default router;
