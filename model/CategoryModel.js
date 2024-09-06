import mongoose from "mongoose";

const CategorySchema=mongoose.Schema({
    catName:{type:String,required:true},
    catDescription:{type:String,required:true},
    catImage:{type:String,required:true}
},{
    timestamps:true
});


export default mongoose.models.Category || mongoose.model("Category",CategorySchema);