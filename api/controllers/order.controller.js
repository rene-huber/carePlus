import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Job from "../models/job.model.js";
import Stripe from "stripe";
export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);

  const job = await Job.findById(req.params.id);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: job.price * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const newOrder = new Order({
    jobId: job._id,
    img: job.cover,
    title: job.title,
    buyerId: req.userId,
    sellerId: job.userId,
    price: job.price,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};
export const confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};
