import express from "express";
import {
  addOrderItems,
  getOrderItemsById,
  updateOrderItemsToPaid,
  getMyOrders,
  getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderItemsById);
router.route("/:id/pay").put(protect, updateOrderItemsToPaid);

export default router;
