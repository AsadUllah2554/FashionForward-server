require('dotenv').config();
const Stripe = require('stripe')(process.env.STRIPE_KEY);

const processPayment = async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  console.log(token, amount);
  try {
  await Stripe.charges.create({
    source: token.id,
    amount,
    currency: 'usd',
  });
  status = 'success';
} catch (error) {
  console.log(error);
  status = 'Failure';
}
res.json({ error, status });
};

module.exports = { processPayment };


// try {
//   await Stripe.charges.create({
//     source: token.id,
//     amount,
//     currency: 'usd',
//   });
//   status = 'success';
// } catch (error) {
//   console.log(error);
//   status = 'Failure';
// }
// res.json({ error, status });