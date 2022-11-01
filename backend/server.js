
// const { config } = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors")
const Jwt = require('jsonwebtoken')
const JwtKey = 'e-comm'
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51LxbUbSAhgxBBtWlRIuj1YpmpIZuQZMtzWah1DlA9HedGJD9cDcAHscWHCh6ZbsNV0PqU1OLevHLA1WFxmpGFtza00RRWYj5nY');
const mongoose= require("mongoose")
const Delevery = require("./models/addressSchema")
const Token = require("./models/token")


app.use(express.json());
app.use(cors())

require("dotenv/config")


const PORT = process.env.PORT || 7000;
app.get("/", (req, res) => res.send("Hello World!"));

app.post("/address", async (req, res)=>{
    const address= req.body;
    const newAddress= new Delevery(address);
await newAddress.save();
res.json(address)

})
// app.post("/token", async (req, res)=>{

  
//   const token= req.body;
//   const newToken= new Token(token);
// await newToken.save();
// res.json(token)

// })
 
app.get("/getUser", (request, response) => {
  Delevery.find(email,name,p)
    .then((result) => {
      response.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


app.get("/getUserById/:id", async (req, res) => {
  await Delevery.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

app.post("/payment", async (req, res) => {
  const payment = req.body;
  // console.log("payment",payment)

  const customer = await stripe.customers.create({
      description: 'Test Customer',
      name: "Prince Thakur",
      email: "prince@gmail.com",
      source: payment.token
  });

  const paymentIntent = await stripe.paymentIntents.create({
      amount: payment.price,
      currency: 'inr',
      payment_method_types: ['card'],
      customer: customer.id,
      confirm: true
  });
  res.json(paymentIntent)


})



mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((data) =>
        app.listen(process.env.PORT, () => {
            console.log(`my server is starting at ${PORT}`)
        })
    )
    .catch((Error) => {
        console.log("DB_connection failed", Error)
    })
