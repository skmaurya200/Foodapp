import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,require:true},
    category:{type:String,require:true}
})
const foodModel = mongoose.models.food || mongoose.model("Food",foodSchema)
export default foodModel;