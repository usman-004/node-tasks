const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
  })
    .then((result) => {
      res.status(200).json({
        message: "Product Created.",
        result: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//update product
exports.updateProduct = (req, res, next) => {
  console.log("Body => ", req.body);
  const prodId = req.params.productId;

  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then((result) => {
      console.log("UPDATED PRODUCT!");
      res.status(200).json({
        product: result,
        message: "product is updated",
      });
    })
    .catch((err) => console.log(err));
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   Product.findById(prodId)
//     .then((product) => {
//       if (!product) {
//         return res.redirect("/");
//       }
//     })
//     .catch((err) => console.log(err));
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;
//   Product.findById(prodId)
//     .then((product) => {
//       product.title = updatedTitle;
//       product.price = updatedPrice;
//       product.description = updatedDesc;
//       product.imageUrl = updatedImageUrl;
//       return product.save();
//     })
//     .then((result) => {
//       console.log("UPDATED PRODUCT!");
//       res.status(200).json({
//         product: result,
//         message: "product is updated",
//       });
//     })
//     .catch((err) => console.log(err));
// };

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      // console.log(products);
      res.status(200).json({
        products: products,
      });
    })
    .catch((err) => console.log(err));
};
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      // console.log(products);
      res.status(200).json({
        products: product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  //
  Product.findByPk(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      res.status(200).json({
        message: "PRODUCT DESTROYED...",
      });
    })
    .catch((err) => console.log(err));
};
