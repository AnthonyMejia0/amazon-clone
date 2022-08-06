const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LRpr9GigE2Uaq02UMHvYHaNYM4K8UnJSs10moTmhjMstuq95sKLJ0fQ2BgjRl2EOR488ZyxhqM9bIs000RGXec100uGzRrBtt"
);

// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) =>
  response.status(200).send("Hello World")
);

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment request recieved for this amount", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

