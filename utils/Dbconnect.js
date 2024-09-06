import mongoose from "mongoose";
const Dbconnect=function()
{
    try{
        mongoose.connect(process.env.MONGODB_URL)
    }
    catch(error)
    {
        console.log("Database connection failed",error);
    }
}
export default Dbconnect;