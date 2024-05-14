const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

require('dotenv').config();
app.use(express.json());
app.use(cors({
    origin: ['https://united-aqua-tec.vercel.app', 'https://united-aqua-tec-admin.vercel.app', 'http://localhost:5173'],
    credentials: true,
}));


mongoose.connect(process.env.MONGO_URI).then((res) => {
    console.log('connected to db');
}).catch((err) => {
    console.log('failed')
});

app.get("/", (req, res) => {
    res.send("Express App is running");
});

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    }

    ,
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,

    },
    available: {
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct', async(req, res) => {
    let products = await Product.find({});
    let id;
    console.log(products)
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        old_price: req.body.old_price
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success: true,
        name: req.body.name,
    })
});

app.post('/removeproduct', async(req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("removed succesfully");
    res.json({
        sucess: true,
        name: req.body.name,
    })
})

app.get('/allproducts', async(req, res) => {
    let Products = await Product.find({});
    // console.log("all fetched");
    res.send(Products);
})

const Contact = mongoose.model('Contact', {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        required: true,
    }
});

app.get('/contacts', async(req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
app.post('/contact', async(req, res) => {
    const { name, email, phone, subject, description } = req.body;
    console.log(name, email)
    const contact = new Contact({
        name,
        email,
        phone,
        subject,
        description
    });

    try {
        const savedContact = await contact.save();
        res.json(savedContact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('Owner', UserSchema);
app.post('/login', async(req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid username or Password' });
        }

        res.json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.listen(port, (e) => {
    if (!e) {
        console.log("server running on: " + port);
    } else {
        console.log("error" + e);
    }
});