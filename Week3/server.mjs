import exp from "express";
import { userApp } from "./APIs/userAPI.js";
import { productApp } from "./APIs/productAPI.js";
const app=exp();
app.listen(3000,()=>console.log("server is running on port 3000"));
app.use(exp.json());
//forward req to userApp

app.use('/user-api',userApp)
// we defined user-api in the postman as a base url for user routes
app.use('/product-api',productApp)













































//body parser middleware
// //in memory users array
// //create a custom middleware to log the request method and url
// function middleware1(req,res,next){
//     console.log("middleware 1 is executed")
//     //res.json({message:"res from middleware"})
//     //forward request to  next middleware
//     next()
// }
// function middleware2(req,res,next){
//     console.log("middleware 2 is executed")
//     next()
// }
// //to execute for every incoming request then simply app.use method 
// app.use(middleware1)
// app.use(middleware2)
// let users=[];
// //create USER API
// //get req handling route
// app.get("/users",middleware1,(req,res)=>{
//    res.status(200).json({message:"all users",payload:users});
// });
// app.post("/users",middleware2,(req,res)=>{ //middleware2 will be executed only for this route
//     let newUser=req.body
//     users.push(newUser);
//     res.status(201).json({message:"user created"})
// });
// app.put("/users/:id",(req,res)=>{
//     //get modified user from req body
//     //find the user with id exists in array
//     //if user not found, send response as "user not found"
//     //if user found, modify the user details
//     //send res as "user modified"
//     //replace now the user details with modified user details
//     //we use splice method to replace the user details
//     //index based deletion, update,insertion
//     //splice(index,no of elements to delete,elem1,elem2..)

//     let modifiedUser=req.body;
//     let id = Number(req.params.id);
//     let index=users.findIndex((user)=>user.id==id);
//     if(index==-1){ //if the index not found it returns -1
//         return res.status(404).json({message:"user not found"}); //resource not found then status code is 404
//     }
//     modifiedUser.id = id; //ensure id remains consistent
//     let deletedUser=users.splice(index,1,modifiedUser)
//     res.status(200).json({message:"user modified"});
// });

// //read user by id
// app.get('/users/:id',(req,res)=>{ //:id is a route parameter and it is a url parameter
//     console.log(req.params);
//     let id=Number(req.params.id) //returns an object of route parameters
//     //{id:100}
//     let user=users.find((userObj)=>userObj.id===id)
//     if(!user){
//         return res.status(404).json({message:"user not found"});
//     }
//     res.status(200).json({message:"user found",payload:user});


// });
// //delete user by id
// app.delete("/users/:id",(req,res)=>{
//     let id=Number(req.params.id);
//     let index=users.findIndex((user)=>user.id===id);
//     if(index==-1){
//         return res.status(404).json({message:"user not found"});
//     }
//     let deletedUser=users.splice(index,1);
//     res.status(200).json({message:"user deleted",payload:deletedUser});
// });

// //============================================================================================
// //now we should aslo write for products api
// let products=[];
// //create a Product API
// app.get("/products",(req,res)=>{
//     res.status(200).json({message:"all products",payload:products});
// });
// app.get("/products-brand/:brand",(req,res)=>{
//     let brand=req.params.brand;
//     let filteredProducts=products.filter((product)=>product.brand===brand);
//     res.status(200).json({message:"all products of brand",payload:filteredProducts});
// });
// app.post("/products",(req,res)=>{
//     let newProduct=req.body
//     products.push(newProduct);
//     res.status(201).json({message:"product created"})
// });
// app.put("/products/:id",(req,res)=>{
//     let modifiedProduct=req.body;
//     let id = Number(req.params.id);
//     let index=products.findIndex((product)=>product.id==id);
//     if(index===-1){
//         return res.status(404).json({message:"product not found"});
//     }
//     modifiedProduct.id = id; //endure id remains consistent
//     let deletedProduct=products.splice(index,1,modifiedProduct)
//     res.status(200).json({message:"product modified"});
// });
// app.get('/products-id/:id',(req,res)=>{
//     let id=Number(req.params.id)
//     let product=products.find((productObj)=>productObj.id===id)
//     if(!product){
//         return res.status(404).json({message:"product not found"});
//     }
//     res.status(200).json({message:"product found",payload:product});
// });
// app.delete("/products/:id",(req,res)=>{
//     let id=Number(req.params.id);
//     let index=products.findIndex((product)=>product.id===id);
//     if(index==-1){
//         return res.status(404).json({message:"user not found"});
//     }
//     let deletedProduct=products.splice(index,1);
//     res.status(200).json({message:"Product deleted",payload:deletedProduct});
// });