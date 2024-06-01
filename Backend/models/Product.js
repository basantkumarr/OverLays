 
const mongoose=require('mongoose');



const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    color: String,
    quant: Number,
    category: String
});

const productmodel=mongoose.model("product",productSchema);
module.exports=productmodel;