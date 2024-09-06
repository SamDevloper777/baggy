import mongoose from "mongoose";
import CategoryModel from "./CategoryModel";

const ProductSchema= mongoose.Schema({
    productName:{type:String,required:true},
    productDescription:{type:String,required:true},
    productPrice:{type:String,required:true},
    productImage:{type:String,required:true},
    productMrp:{type:String,required:true},
    productCategory:{type:mongoose.Schema.Types.ObjectId,required:true,ref:CategoryModel}
},{
    timestamps:true
});


export default mongoose.models.Product || mongoose.model("Product",ProductSchema);  