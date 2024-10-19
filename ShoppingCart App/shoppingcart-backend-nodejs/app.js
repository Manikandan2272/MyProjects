const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const multer = require("multer");
require("reflect-metadata");

const app = express();

var db;

const dbConnection = function() {
    console.log('inside db conn');
    const uri = "mongodb+srv://gopi:gopi@mycluster.csmbn.mongodb.net/shoppingcartOct930vel?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        console.log('connecting..');
    if(!err){
        db = client.db("shoppingcartOct930vel");
        console.log("DB Connected");
    } else {
        console.log('err', err);
        console.log("DB Not Connected");
    }     
    });
}

dbConnection();

app.use(bodyparser.json());

app.use(cors());

app.use((req, res, next)=>{             // common for all the path
    next();
});

app.use("/home", (req, res, next)=>{             // common for particular specifi path
    next();
});


function verifyUser(req, res, next)
{

    console.log("User Verified");

    next();
}


app.get("/", (req, res)=>{

    console.log("Index page");
    res.send("<h1>Welcome to Our App</h1>");

});

app.get("/home", verifyUser, (req, res)=>{

    console.log("Home page");
    var data = {a:"hi", b:"hello"};

    res.json(data);
});

var products = [{pdtName:"Knorr Instant Soup (100 Gm)", pdtprice:78, pdtImgPath:"http://localhost:4200/assets/images/5.png"},
{pdtName:"Chings Noodles (75 Gm)", pdtprice:12, pdtImgPath:"http://localhost:4200/assets/images/6.png"},
{pdtName:"Lahsun Sev (150 Gm)", pdtprice:69, pdtImgPath:"http://localhost:4200/assets/images/7.png"},
{pdtName:"Premium Bake Rusk (300 Gm)", pdtprice:67, pdtImgPath:"http://localhost:4200/assets/images/8.png"},
{pdtName:"Lahsun Sev (150 Gm)", pdtprice:69, pdtImgPath:"http://localhost:4200/assets/images/7.png"}];


 /**
 * @swagger
 * components:
 *   schemas:
 *     Products:
 *       type: object
 *       required:
 *         - pdtCatId
 *         - pdtName
 *         - pdtPrice
 *         - pdtDesc
 *         - pdtImg
 *       properties:
 *         _id:
 *           type: number
 *           description: The auto-generated id of the Product
 *         pdtCatId:
 *           type: number
 *           description: Category id of the product
 *         pdtName:
 *           type: string
 *           description: Name of the product
 *         pdtPrice:
 *           type: number
 *           description: Price of the Product
 *         pdtDesc:
 *           type: string
 *           description: Description of the Product
 *         pdtImg:
 *           type: string
 *           description: Image url path of the Product
 *           format: binary
 *       example:
 *         pdtCatId: 1
 *         pdtName: Pepsi
 *         pdtPrice: 100
 *         pdtDesc: Chill with pepsi
 *         pdtImg: productImage-1636693499346.png
 */

 /**
  * @swagger
  * tags:
  *   name: Products
  *   description: The Products managing API
  */

 
/**
 * @swagger
 * /listproducts:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the Products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Products'
 */

app.get("/listproducts", (req, res)=>{

   // res.json(products);

   db.collection("products").find().toArray((error, data)=>{

    res.json(data);

   });
    
});

/**
 * @swagger
 * /getpdtcatwise/{catid}:
 *  get:
 *    summary: Get Products by category
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: catid
 *        schema:
 *          type: string
 *        required: true
 *        description: The category id
 *    responses:
 *      200:
 *        description: The category was updated
 *        content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Products'
 *      404:
 *        description: The category was not found
 *      500:
 *        description: Some error happened
 */

app.get("/getpdtcatwise/:catid", (req, res)=>{

    console.log(req.params);

    db.collection("products").find({pdtCatId : Number(req.params.catid)}).toArray((error, data)=>{

        res.json(data);
    
       });
});

/**
 * @swagger
 * /getcategories:
 *  get:
 *    description: Use to request all categories
 *    tags: [Products]
 *    responses:
 *      '200':
 *        description: A successful response
 */

app.get("/getcategories", (req, res)=>{

    db.collection("category").find().toArray((error, data)=>{

        res.json(data);
    });
});


 /**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - Username
 *         - Password
 *         - Email
 *         - Phone
 *       properties:
 *         _id:
 *           type: number
 *           description: The auto-generated id of the user
 *         Username:
 *           type: string
 *           description: The username
 *         Password:
 *           type: string
 *           description: The password of the user
 *         Email:
 *           type: string
 *           description: The email id of the user
 *         Phone:
 *           type: string
 *           description: The phone number of the user
 *       example:
 *         Username: admin
 *         Password: admin
 *         Email: test@test.com
 *         Phone: 423423434
 */

  /**
 * @swagger
 * components:
 *   schemas:
 *     Userlogin:
 *       type: object
 *       required:
 *         - Username
 *         - Password
 *       properties:
 *         Username:
 *           type: string
 *           description: The username
 *         Password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         Username: admin
 *         Password: admin
 */

 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: The users managing API
  */

 /**
 * @swagger
 * /register:
 *   post:
 *     summary: Create a new users
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 */

 

app.post("/register", (req, res)=>{
console.log(req.body);
    req.body._id = new Date().getTime();

    console.log(req.body);

    db.collection("users").count({Username : req.body.Username}, (error, data)=>{

        if(data==0)
        {
            db.collection("users").save(req.body, (error1, data1)=>{

                if(error1)
                {
                    res.status(403).json("Error in Insert method");
                }
                else {
                    res.json("User Registered Successfully");
                }
        
            });
        }
        else {
            res.status(409).json("The Username Already Taken");
        }
        
    });

    
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login users
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Userlogin'
 *     responses:
 *       200:
 *         description: The user was successfully logged
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Userlogin'
 *       500:
 *         description: Some server error
 */

app.post("/login", (req, res)=>{

    console.log(req.body);

    db.collection("users").find(req.body, {projection: {_id:1, Username:1}}).toArray((error, data)=>{

        if(error)
        {
            res.status(403).json("Error in finding the doc");
        }
        else {

            var token = '';
            
            if(data.length>0)
            {
                token = jwt.sign(data[0], "myseckey");
            }

            res.json(token);
           
        }
    });

});

/**
 * @swagger
 * /usernamecheck/{username}:
 *  get:
 *    summary: Get Products by category
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: username
 *        schema:
 *          type: string
 *        required: true
 *        description: The username
 *    responses:
 *      200:
 *        description: You will get 0 or 1. 0 means Username Available for you
 *        content:
 *           application/json:
 *             schema:
 *               type: number
 *      404:
 *        description: The username check was not found
 *      500:
 *        description: Some error happened
 */
app.get("/usernamecheck/:username", (req, res)=>{

    db.collection("users").count({Username : req.params.username}, (error, data)=>{

        res.json(data);
    });

});

var loggeduser;

function verifyToken(req, res, next)
{
    var token = req.headers.myauthtoken;

    if(!token)
    {
      return  res.status(401).json("No Token Found");
    }

    jwt.verify(token, "myseckey", (error, data)=>{

        if(error)
        {
            return res.status(401).json("Token Invalid");
        }

        loggeduser = data;
    });


    next();
}

/**
 * @swagger
 * /mycart:
 *   get:
 *     summary: Returns the list of logged user cart items
 *     tags: [Products]
 *     parameters:
 *      - in: header
 *        name: myauthtoken
 *        schema:
 *          type: string
 *        required: true
 *        description: The JWT Key
 *     responses:
 *       200:
 *         description: The list of Cart Items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */

app.get("/mycart", verifyToken, (req, res)=>{

    console.log(loggeduser);

    db.collection("cart").aggregate([
        { $match: { cartUserId: loggeduser._id } },
            { $lookup:
               {
                 from: 'products',
                 localField: 'cartPdtId',
                 foreignField: '_id',
                 as: 'productdetails'
               }
             }
            ]).toArray((err, data)=> {
           
                res.json(data);
          });
        
});

const myStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./product_images");
    },
    filename: (req, file, cb)=>{

        cb(null, file.originalname);
    }
});

/**
 * @swagger
 * /addproducts:
 *   post:
 *     summary: Create a new products
 *     tags: [Products]
 *     consumes:
 *      - "multipart/form-data"
 *     parameters:
 *      - in: header
 *        name: myauthtoken
 *        schema:
 *          type: string
 *        required: true
 *        description: The JWT Key
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Products'
 *     responses:
 *       200:
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *       500:
 *         description: Some server error
 */

app.post("/addproducts", verifyToken, multer({storage : myStorage}).single("pdtImg"), (req, res)=>{

    req.body._id = new Date().getTime();
    req.body.pdtCatId = Number(req.body.pdtCatId);
    req.body.pdtPrice = Number(req.body.pdtPrice);
    req.body.pdtImgPath = req.file.filename; 

    db.collection("products").insert(req.body, (error, data)=>{
        if(error)
        {
            res.status(401).json("Error in Add Products");
        }
        else {
            res.json("Products Added Successfully");
        }
    })
});


 /**
 * @swagger
 * components:
 *   schemas:
 *     AddToCart:
 *       type: object
 *       required:
 *         - cartPdtId
 *         - cartPdtPrice
 *       properties:
 *         cartPdtId:
 *           type: number
 *           description: Product unique ID
 *         cartPdtPrice:
 *           type: number
 *           description: Actual Product Price
 *       example:
 *         cartPdtId: 1636693499347
 *         cartPdtPrice: 100
 */

/**
 * @swagger
 * /addtocart:
 *   post:
 *     summary: Add products in logged user's cart
 *     tags: [Products]
 *     parameters:
 *      - in: header
 *        name: myauthtoken
 *        schema:
 *          type: string
 *        required: true
 *        description: The JWT Key
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddToCart'
 *     responses:
 *       200:
 *         description: The Cart item Added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AddToCart'
 *       500:
 *         description: Some server error
 */
app.post("/addtocart", verifyToken, (req, res)=>{

    console.log(loggeduser);

    req.body._id = new Date().getTime();
    req.body.cartUserId = loggeduser._id;
    req.body.cartPdtQty = 1;

    db.collection("cart").count({cartPdtId : req.body.cartPdtId, cartUserId : loggeduser._id}, (error, data)=>{

        if(data==0)
        {
            db.collection("cart").insertOne(req.body, (error1, data1)=>{

                res.json("Cart Item Added Successfully");
            });
        }
        else {
            res.status(409).json("This Product Already Added in Your Cart!");
        }
        
    });

    
});

/**
 * @swagger
 * /cartcount:
 *  get:
 *    summary: Get Logged User Cart count
 *    tags: [Products]
 *    parameters:
 *      - in: header
 *        name: myauthtoken
 *        schema:
 *          type: string
 *        required: true
 *        description: The JWT Key
 *    responses:
 *      200:
 *        description: You will get logged user cart count here
 *        content:
 *           application/json:
 *             schema:
 *               type: number
 *      404:
 *        description: Something went to wrong
 *      500:
 *        description: Some error happened
 */

app.get("/cartcount", verifyToken, (req, res)=>{

    db.collection("cart").count({cartUserId : loggeduser._id}, (error, data)=>{

        res.json(data);
    });

});

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateCart:
 *       type: object
 *       required:
 *         - cartId
 *         - cartPdtQty
 *         - pdtPrice
 *       properties:
 *         cartId:
 *           type: number
 *           description: Cart unique ID to update the row
 *         cartPdtQty:
 *           type: number
 *           description: No of Quantity to update
 *         pdtPrice:
 *           type: number
 *           description: Actual Product Price
 *       example:
 *         cartId: 1641293678625
 *         cartPdtQty: 2
 *         pdtPrice: 100
 */

/**
 * @swagger
 * /updatecart:
 *   put:
 *     summary: Add products in logged user's cart
 *     tags: [Products]
 *     parameters:
 *      - in: header
 *        name: myauthtoken
 *        schema:
 *          type: string
 *        required: true
 *        description: The JWT Key
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCart'
 *     responses:
 *       200:
 *         description: The Cart item Updated Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateCart'
 *       500:
 *         description: Some server error
 */

app.put("/updatecart", verifyToken, (req, res)=>{

    var condition = {_id : req.body.cartId};
    var newValues = {$set : {cartPdtQty : req.body.cartPdtQty, cartPdtPrice : req.body.cartPdtQty*req.body.pdtPrice}};

    db.collection("cart").update(condition, newValues, (error, data)=>{

        res.json("Cart Items Updated Successfully");
    });

});

/**
 * @swagger
 * /removecart/{cartid}:
 *  delete:
 *    summary: Delete Cart Items
 *    tags: [Products]
 *    parameters:
 *      - in: header
 *        name: myauthtoken
 *        schema:
 *          type: string
 *        required: true
 *        description: The JWT Key
 *      - in: path
 *        name: cartid
 *        schema:
 *          type: number
 *        required: true
 *        description: The unique cart ID which you want to remove
 *    responses:
 *      200:
 *        description: The cart item removed successfully
 *        content:
 *           application/json:
 *             schema:
 *               type: string
 *      404:
 *        description: URL not found
 *      500:
 *        description: Some error happened
 */
app.delete("/removecart/:cartid", verifyToken, (req, res)=>{

    db.collection("cart").deleteOne({_id : Number(req.params.cartid)}, (error, data)=>{

        res.json("Cart Item Removed Successfully!!");
    });
});

module.exports = app;


