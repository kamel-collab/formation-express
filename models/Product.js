import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Le nom du produit est requis"],
        trim: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: [true, "Le prix du produit est requis"],
        min: [0, "Le prix du produit doit être positif"],
        default: 0
    },


}
    , { timestamps: true }
);
const Product = mongoose.model('Product', productSchema);
export default Product;