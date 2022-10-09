const express = require("express");
const bodyparser = require("body-parser");
const products = require("../models/productModel");
const Apifeatures = require("../utilis/apifeatures");
const { isAuthenticated, verifyAdmin } = require("../middlewares.js/auth");
const Errorhandler = require("../utilis/errorHandler");

const productRouter = express.Router();
productRouter.use(bodyparser.json());

productRouter.route("/").get((req, res, next) => {
  const resultPerPage = 8;
  products.countDocuments()
  .then((Count)=>{
    const productCount=Count;
  const apifeature = new Apifeatures(products.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  let product = apifeature.query;
  product
    .then(
      (product) => {
        res.status(200).json({product,productCount});
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
  },err=>next(err))
  .catch(err=>next(err))
});
productRouter.post(
  "/new",
  isAuthenticated,
  verifyAdmin("admin"),
  (req, res, next) => {
    req.body.user = req.user.id;
    products
      .create(req.body)
      .then(
        (product) => {
          res.status(201).json(product);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  }
);

productRouter.get(
  "/admin/products",
  isAuthenticated,
  verifyAdmin("admin"),
  (req, res, next) => {
    products.find().then((product) => {
      res.status(200).json(product);
    });
  }
);

productRouter
  .route("/:productid")
  .get((req, res, next) => {
    products
      .findById(req.params.productid)
      .then(
        (product) => {
          res.status(200).json(product);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put(isAuthenticated, verifyAdmin("admin"), (req, res, next) => {
    products
      .findByIdAndUpdate(
        req.params.productid,
        {
          $set: req.body,
        },
        { new: true }
      )
      .then(
        (prodcut) => {
          res.status(200).json(prodcut);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(isAuthenticated, verifyAdmin("admin"), (req, res, next) => {
    products
      .findByIdAndRemove(req.params.productid)
      .then(
        (product) => {
          res.status(200).end("sussfully deleted");
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

productRouter.put("/reviews/create", isAuthenticated, (req, res, next) => {
  console.log(req.body);
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  products
    .findById(productId)
    .then(
      (product) => {
        const isReviewd = product.reviews.find(
          (rev) => rev.user.toString() === req.user._id.toString()
        );

        if (isReviewd) {
          product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
              (rev.rating = rating), (rev.comment = comment);
          });
        } else {
          product.reviews.push(review);
          product.numOfReviews = product.reviews.length;
        }

        let avg = 0;
        product.reviews.forEach((rev) => {
          avg += rev.rating;
        });
        product.ratings = avg / product.reviews.length;
        console.log(product);
        product
          .save({ validateBeforeSave: false })
          .then(
            (product) => {
              res.status(200).json(product);
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

productRouter.get("/reviews/get", (req, res, next) => {
  products.findById(req.query.id).then((product) => {
    res.status(200).json({ success: true, reviews: product.reviews });
  });
});

productRouter.delete("/reviews/delete", (req, res, next) => {
  products
    .findById(req.query.productId)
    .then(
      (product) => {
        if (!product) {
          return next(new Errorhandler("product not found", 404));
        }

        const reviews = product.reviews.filter(
          (rev) => rev._id.toString() !== req.query.id.toString()
        );
        let avg = 0;
        reviews.forEach((rev) => {
          avg += rev.rating;
        });
        let ratings = 0;

        if (reviews.length === 0) {
          ratings = 0;
        } else {
          ratings = avg / reviews.length;
        }

        const numOfReviews = reviews.length;

        products
          .findByIdAndUpdate(
            req.query.productId,
            { reviews, ratings, numOfReviews },
            { new: true, runValidators: true, useFindAndModify: false }
          )
          .then(
            (product) => {
              res.status(200).json({ success: true, product });
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
module.exports = productRouter;
