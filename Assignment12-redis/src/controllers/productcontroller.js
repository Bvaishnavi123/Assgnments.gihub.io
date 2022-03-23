const Product = require("../model/productmodel");
const clint = require("../config/redisconfig");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    //check if key is present or note
    clint.get("products", async function (err,fetcheddata) {
      if (fetcheddata) {
        const products = JSON.parse(fetcheddata);
        return res.status(200).send({products:products , redis : true});
      } else {
        try {
          const products = await Product.find().lean().exec();
          clint.set("products", JSON.stringify(products));
          return res.status(200).send({products:products, redis:false});
        } catch (error) {
          return res.status(500).send(error);
        }
      }
    });
    // const products = await Product.find().lean().exec();
    // return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    // set the key and value in post request in redis
    //fetch the all products and store it
    const products = await Product.find().lean().exec();
    clint.set("products", JSON.stringify(products));
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
    try {
        //check if key is present or note
        clint.get(`products.${req.params.id}`, async function (err,fetcheddata) {
          if (fetcheddata) {
            const products = JSON.parse(fetcheddata);
            return res.status(200).send({products:products , redis : true});
          } else {
            try {
              const products = await Product.findById(req.params.id).lean().exec();
              clint.set(`products.${req.params.id}`, JSON.stringify(products));
              return res.status(200).send({products:products, redis:false});
            } catch (error) {
              return res.status(500).send(error);
            }
          }
        });
        // const products = await Product.find().lean().exec();
        // return res.status(200).send(products);
      } catch (error) {
        return res.status(500).send(error);
      }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // we have to set two keys one is single product and second is for all products
    const products = await Product.find().lean().exec();
    clint.set(`products.${req.params.id}`, JSON.stringify(product))
    clint.set("products", JSON.stringify(products))
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    const products = await Product.find().lean().exec();
    clint.del(`products.${req.params.id}`)
    clint.set("products", JSON.stringify(products))
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
