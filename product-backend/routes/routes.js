const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("/products", (req, res) => {
    Product.find({}, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            res.json(response);
        }
    });
});
router.get("/products/:id", (req, res) => {
    Product.findById({ _id: req.params.id }, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            res.json(response);
        }
    });
});

router.delete("/products/:id", (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.id }, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            res.json(response);
        }
    });
});

router.put("/products/:id", (req, res) => {
    const updatedProduct = {
        name: req.body.name,
        price: req.body.price
    };
    Product.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: updatedProduct },
        (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.json(response);
            }
        }
    );
});

router.post("/products/add", (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    newProduct.save((error, response) => {
        if (error) console.log(error);
        else res.json(response);
    });
});

module.exports = router;
