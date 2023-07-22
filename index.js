const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const Stripe = require('stripe')(process.env.STRIPE_KEY);
const cors = require("cors");

const mongoose = require('mongoose');
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const stripeRoutes = require("./routes/stripe");
const orderRoutes = require("./routes/order");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("connected to data server started at !!!", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", cors(), (req, res) => {
    res.json({ msg: "Welcome to the app" });
  });
  
  app.use("/api/products", productRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/admin", adminRoutes);
  app.use("/api/orders", orderRoutes);
  app.use("/api/stripe", stripeRoutes);
  