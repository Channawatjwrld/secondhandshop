const mongoose = require('mongoose');
const Schema = mongoose.Schema

const categorySchema = new Schema({
    category_name: {type: String, require: true, trim: true }
},{collection:"categorys",});

const category = mongoose.model("categorys",categorySchema)

categorySchema.virtual('products', {
    ref:'products',
    localField:'_id',
    foreignField:'category_id'
})
module.exports = category