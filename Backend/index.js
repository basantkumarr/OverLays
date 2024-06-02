const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductModel = require('./models/Product');
const UserModel = require('./models/User');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
 app.use(cors({
  origin: "https://overlays-xi.vercel.app",
  optionsSuccessStatus: 200,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
  preflightContinue: false,
}));

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://overlays-xi.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
});


const connectWithRetry = () => {
  mongoose.connect('mongodb+srv://basantkumarweb:otgbOiKdi1I7B6L3@products.brtephm.mongodb.net/?retryWrites=true&w=majority&appName=Products', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
    setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
  });
};

connectWithRetry();

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

// Routes
app.post('/pd', async (req, res, next) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

app.post('/user', async (req, res, next) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

app.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
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
    next(error);
  }
});

app.get('/collection', async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

app.get('/collection/:id', async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    next(error);
  }
});

app.delete('/collection/:id', async (req, res, next) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    if (product) {
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    next(error);
  }
});

app.put('/collection/:id', async (req, res, next) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    next(error);
  }
});

app.get('/', (req, res) => {
  res.send("Server is running...");
});

// Error handling middleware should be the last middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
