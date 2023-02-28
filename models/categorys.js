const mongoose = require('mongoose');
const Schema = mongoose.Schema

const categorySchema = new Schema({
    category_name: {type: String, require: true, trim: true }
},{toJSON:{virtuals:true},collection:"categorys"});

categorySchema.virtual('products', {
    ref:'Product',
    localField:'_id',
    foreignField:'category_id'
})

const category = mongoose.model("Category",categorySchema)

module.exports = category