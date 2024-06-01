const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const ProductModel = require("./models/Product");
const usermodel = require("./models/User");
require('dotenv').config();

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: "https://overlays-xi.vercel.app",
  optionsSuccessStatus: 200,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
  preflightContinue: false,
}));


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

app.post("/pd", (req, res) => {
  ProductModel.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
});


app.post("/user", (req, res) => {
   usermodel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err));
});



app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await usermodel.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.status(400).json("Incorrect password");
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Failed to login" });
  }
});


app.get("/collection",(req,res)=>{
    ProductModel.find().then(product => res.json(product))
    .catch(err => res.status(400).json(err));
})


app.get('/collection/:id', (req, res) => {
  const productId = req.params.id;
  ProductModel.findById(productId)
    .then(product => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).send('Product not found');
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error finding product');
    });
});


app.delete('/collection/:id', (req, res) => {
  const productId = req.params.id;
  ProductModel.findByIdAndDelete(productId)
    .then(product => {
      if (product) {
        res.json({ message: 'Product deleted successfully' });
      } else {
        res.status(404).send('Product not found');
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error deleting product');
    });
});





app.put('/collection/:id', (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body; // Assuming you send the updated product data in the request body

  ProductModel.findByIdAndUpdate(productId, updatedProduct, { new: true })
    .then(updatedProduct => {
      if (updatedProduct) {
        res.json(updatedProduct);
      } else {
        res.status(404).send('Product not found');
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error updating product');
    });
});



app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
