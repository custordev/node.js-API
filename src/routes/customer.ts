import {
  createCustomer,
  deleteCustomerById,
  getCustomerById,
  getCustomers,
} from "@/controllers/customers";
import express from "express";
const customerRouter = express.Router();

customerRouter.get("/customers", getCustomers);
customerRouter.post("/customers", createCustomer);
customerRouter.get("/customers/:id", getCustomerById);
customerRouter.delete("/customers/:id", deleteCustomerById);

export default customerRouter;
